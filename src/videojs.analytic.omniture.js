/**
 * Common Function. 1. debug: write message on console log.
 */

function o_debug(msg) {
	var url = window.location.href;
	// if (url.indexOf('localhost') == -1) return;
	if (typeof (console) === 'undefined') {
		return;
	}
	console.log(msg);
};

/**
 * VideoPlayerDelegate implementation for video.js.
 *
 */
(function(ADB) {
	'use strict';

	var extend = ADB.core.extend;
	var PlayerDelegate = ADB.va.PlayerDelegate;

	extend(VideoPlayerDelegate, PlayerDelegate);

	function VideoPlayerDelegate(player, provider) {
		VideoPlayerDelegate.__super__.constructor.call(this);

		this._player = player;
		this._currentAd = null;
		this._videoInfo = null;
		this._provider = provider;
		this._adposition = 0;
	}

	VideoPlayerDelegate.prototype.getVideoInfo = function() {
		// use the ADB.va.VideoInfo object prototype
		var videoInfo = new ADB.va.VideoInfo();
		if(!this._provider.isAdPlaying()){
			if (this._player.mediainfo){
				videoInfo.id = this._player.mediainfo.id;
				videoInfo.name = this._player.mediainfo.name;
				videoInfo.playerName = "Brightcove Player";
				videoInfo.length =  this._player.mediainfo.duration/1000;
				videoInfo.streamType = ADB.va.ASSET_TYPE_VOD;
				videoInfo.playhead = this._player.currentTime();
			} else {
				videoInfo.id = this._player.id();
				videoInfo.name = this._player.name();
				videoInfo.playerName = "Brightcove Player";
				videoInfo.length =  this._player.duration();
				videoInfo.streamType = ADB.va.ASSET_TYPE_VOD;
				videoInfo.playhead = this._player.currentTime();
			}
			this._videoInfo = videoInfo;
		} else{
			videoInfo = this._videoInfo
		}
		videoInfo.playhead = this._provider.playheadTime();
		return videoInfo;
	};

	VideoPlayerDelegate.prototype.getAdBreakInfo = function() {
		var adBreakInfo = new ADB.va.AdBreakInfo();
		if(this._provider.isAdPlaying()){
			adBreakInfo.playerName = "Brightcove Player";
			var adType = "";
			if (this._player.ima3.currentAd && this._player.ima3.currentAd.getAdPodInfo){
				this._adposition = this._player.ima3.currentAd.getAdPodInfo().getAdPosition();
				var timeOffset = this._player.ima3.currentAd.getAdPodInfo().getTimeOffset();
				if (timeOffset == 0) {
					adType = "preroll";
				} else if (timeOffset == this._player.duration()) {
					adType = "postroll";
				} else {
					adType = "midroll";
				}
			} else {
				if (Math.floor(this._player.currentTime()) <= 5) {
					adType = "preroll";
				} else if (this._player.currentTime() >= this._player.duration()) {
					adType = "postroll";
				} else {
					adType = "midroll";
				}
			}
			adBreakInfo.name = adType;
			adBreakInfo.position = this._adposition;
			adBreakInfo.startTime = this._player.currentTime();
		} else {
			adBreakInfo = null;
		}
		return adBreakInfo;
	};

	VideoPlayerDelegate.prototype.getAdInfo = function() {
		var adInfo = new ADB.va.AdInfo();
		if(this._provider.isAdPlaying()){
			if (this._player.ima3 && this._player.ima3.currentAd) {
				var currentAd = this._player.ima3.currentAd;
				adInfo.id = currentAd.getAdId();
				adInfo.name = currentAd.getTitle();
				adInfo.length = currentAd.getDuration();
				adInfo.position = currentAd.getAdPodInfo().getAdPosition();
				adInfo.cpm = "";
				this._currentAd = adInfo;
			} else {
				adInfo = this._currentAd;
			}
		} else {
			adInfo = null;
		}
		return adInfo;
	};

	VideoPlayerDelegate.prototype.getChapterInfo = function() {
		return null;
	};

	VideoPlayerDelegate.prototype.getQoSInfo = function() {
		return null;
	};

	VideoPlayerDelegate.prototype.onError = function(errorInfo) {
		o_debug("VideoAnalytics error. Message: " + errorInfo.message
				+ ". Details: " + errorInfo.details + ".");
	};

	VideoPlayerDelegate.prototype.onVideoUnloaded = function() {
		// The VideoHeartbeat engine is done with tracking this video playback
		// session.
		// If we no longer need to track further playback from this player, we
		// can now
		// safely destroy the VideoAnalyticsProvider and with it, the
		// VideoHeartbeat instance.
		this._provider.destroy();
	};

	// Export symbols.
	window.VideoPlayerDelegate = VideoPlayerDelegate;
})(window.ADB);

/**
 * VideoAnalyticsProvider
 *
 */

(function(ADB, VideoPlayerDelegate) {
	'use strict';

	var VideoHeartbeat = ADB.va.VideoHeartbeat;
	var AdobeAnalyticsPlugin = ADB.va.plugins.AdobeAnalyticsPlugin;
	var ConfigData = ADB.va.ConfigData;

	function VideoAnalyticsProvider(appMeasurement, player, settings) {

		if (!appMeasurement) {
			throw new Error(
			"Illegal argument. AppMeasurement reference cannot be null.");
		}

		if (!player) {
			throw new Error(
			"Illegal argument. Player reference cannot be null.");
		}
		this._player = player;
		this._settings = settings;
		this._dataMapping = this._settings.CUSTOM_EVENT;
		this._firstPlay = false;
		this._hasLoad = false;
		this._hasVolumeChange = false;
		this._hasInitCustom = false;
		this._hasInitSocialClose = false;
		this._hasSocialOpen = false;
		this._adPlaying = false;
		this._tracked0 = false;
		this._tracked25 = false;
		this._tracked50 = false;
		this._tracked75 = false;
		this._milestoneTime = 0;
		this._errorTrackCode = null;
		this._playheadTime = 0;

		this._playerDelegate = new VideoPlayerDelegate(this._player, this);
		this._appMeasurement = appMeasurement;
		//this._setupAutoTracking();

		var aaPlugin = new AdobeAnalyticsPlugin(appMeasurement);
		this._videoHeartbeat = new VideoHeartbeat(this._playerDelegate,
				[ aaPlugin ]);
		this._setupVideoHeartbeat();
		this._installEventListeners();
	}

	VideoAnalyticsProvider.prototype.destroy = function() {
		if (this._player) {
			// Comment for replay video
//			this._videoHeartbeat.destroy();
//			this._videoHeartbeat = null;
//			this._playerDelegate = null;
//			this._uninstallEventListeners();

			this._hasLoad = false;
			this._hasVolumeChange = false;
			this._hasSocialOpen = false;
			this._adPlaying = false;
			this._tracked0 = false;
			this._tracked25 = false;
			this._tracked50 = false;
			this._tracked75 = false;
			this._milestoneTime = 0;
			this._errorTrackCode = null
			this._playheadTime = 0;
		}
	};

	// ///////
	// Notification handlers
	// ///////

	VideoAnalyticsProvider.prototype._onLoad = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: VIDEO_LOAD');
			this._videoHeartbeat.trackVideoLoad();
			// check error trigger
			if (this._errorTrackCode) {
				this._videoHeartbeat.trackVideoPlayerError(this._errorTrackCode);
				this._errorTrackCode = null;
			}
		}
	};

	VideoAnalyticsProvider.prototype._onUnload = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: VIDEO_UNLOAD');
			this._videoHeartbeat.trackVideoUnload();
		}
	};

	VideoAnalyticsProvider.prototype._onPlay = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: PLAY');
			this._appMeasurement.contextData['a.contentType'] = "video";
			this._videoHeartbeat.trackPlay();
		}
	};

	VideoAnalyticsProvider.prototype._onPause = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: PAUSE');
			this._videoHeartbeat.trackPause();
		}
	};

	VideoAnalyticsProvider.prototype._onSeekStart = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: SEEK_START');
			this._videoHeartbeat.trackSeekStart();
		}
	};

	VideoAnalyticsProvider.prototype._onSeekComplete = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: SEEK_COMPLETE');
			this._videoHeartbeat.trackSeekComplete();
		}
	};

	VideoAnalyticsProvider.prototype._onBufferStart = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: BUFFER_START');
			this._videoHeartbeat.trackBufferStart();
		}
	};

	VideoAnalyticsProvider.prototype._onBufferComplete = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: BUFFER_COMPLETE');
			this._videoHeartbeat.trackBufferComplete();
		}
	};

	VideoAnalyticsProvider.prototype._onChapterStart = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: CHAPTER_START');
			this._videoHeartbeat.trackChapterStart();
		}
	};

	VideoAnalyticsProvider.prototype._onChapterComplete = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: CHAPTER_COMPLETE');
			this._videoHeartbeat.trackChapterComplete();
		}
	};

	VideoAnalyticsProvider.prototype._onComplete = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: COMPLETE');
			this._videoHeartbeat.trackComplete();
		}
	};

	VideoAnalyticsProvider.prototype._onError = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: ERROR');
			var code = e.target.error ? e.target.error.code : e.code;
			if (!code) { code = 999999; }
			if (this._hasLoad) {
				this._videoHeartbeat.trackVideoPlayerError(code);
			} else {
				this._errorTrackCode = code;
			}
		}
	};

	VideoAnalyticsProvider.prototype._onAdStart = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: AD_START');
			this._appMeasurement.contextData['a.contentType'] = "videoAd";
			this._videoHeartbeat.trackAdStart();
		}
	};

	VideoAnalyticsProvider.prototype._onAdComplete = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: AD_COMPLETE');
			this._videoHeartbeat.trackAdComplete();
		}
	};

	VideoAnalyticsProvider.prototype._onAdHbPlay = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: AD PLAY');
			this._videoHeartbeat.trackPlay();
		}
	};

	VideoAnalyticsProvider.prototype._onAdHbPause = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: AD PAUSE');
			this._videoHeartbeat.trackPause();
		}
	};


	// ///////
	// Tracking custom event
	// ///////

	VideoAnalyticsProvider.prototype._onTrackMilestone = function(milestone) {
		var timePlayed = Math.floor(this._player.currentTime() - this._milestoneTime);
		this._milestoneTime = Math.floor(this._player.currentTime());
		var my_eVar = this._dataMapping.bc_data_mapping.name.split(",");
		this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_data_mapping.contentType + "," + my_eVar[0] + "," + this._dataMapping.bc_data_mapping.segment + ",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
		this._appMeasurement[my_eVar[0]]  = this._player.src();
		this._appMeasurement[this._dataMapping.bc_data_mapping.contentType]  = 'video';
		switch(milestone) {
		case 0:
			o_debug('Player event: TrackMilestone 0');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.view;
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.view;
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '1:M:0-25';
			break;
		case 25:
			o_debug('Player event: TrackMilestone 25');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.timePlayed + '=' + timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['25'];
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['25'];
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '1:M:0-25';
			break;
		case 50:
			o_debug('Player event: TrackMilestone 50');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.timePlayed + '=' + timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['50'];
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['50'];
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '2:M:25-50';
			break;
		case 75:
			o_debug('Player event: TrackMilestone 75');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.timePlayed + '=' + timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['75'];
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['75'];
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '3:M:50-75';
			break;
		case 100:
			o_debug('Player event: TrackMilestone 100');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.timePlayed + '=' + timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.complete;
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.complete;
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '4:M:75-100';
			break;
		default:
			return;
		}
		this._appMeasurement.tl(true, "o", "bc_milestone");
	};

	VideoAnalyticsProvider.prototype._onVolumeChange = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: VOLUME_CHANGE');
			// Custom event
			var isVolumeMuted = this._player.muted();
			this._appMeasurement.events = this._dataMapping.bc_volumechange.event;
			if (isVolumeMuted){
				this._appMeasurement[this._dataMapping.bc_volumechange.evar] = 0;
			} else {
				this._appMeasurement[this._dataMapping.bc_volumechange.evar] = this._player.volume();
			}
			this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_volumechange.evar + ",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_volumechange.event;
			this._appMeasurement.tl(true, "bc", "bc_volumechange");
		}
	};

	VideoAnalyticsProvider.prototype._onAdPause = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: AD_PAUSE');
			// Custom event
			this._appMeasurement.events = this._dataMapping.bc_ad_pause.event;
			if (this._adplayer && this._adplayer.adPlayer.currentTime){
				this._appMeasurement[this._dataMapping.bc_ad_pause.evar]  = this._adplayer.adPlayer.currentTime();
			} else {
				this._appMeasurement[this._dataMapping.bc_ad_pause.evar]  = 0;
			}
			this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_ad_pause.evar +",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType,contextData.a.media.ad.friendlyName,contextData.a.media.ad.podFriendlyName,contextData.a.media.ad.length,contextData.a.media.ad.podPosition";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_ad_pause.event;
			this._appMeasurement.tl(true, "bc", "bc_ad_pause");
		}
	};

	VideoAnalyticsProvider.prototype._onAdResumed = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: AD_RESUMED');
			// Custom event
			this._appMeasurement.events = this._dataMapping.bc_ad_resumed.event;
			this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_ad_pause.evar + ",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType,contextData.a.media.ad.friendlyName,contextData.a.media.ad.podFriendlyName,contextData.a.media.ad.length,contextData.a.media.ad.podPosition";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_ad_resumed.event;
			this._appMeasurement.tl(true, "o", "bc_ad_resumed");
		}
	};

	VideoAnalyticsProvider.prototype._onAdClick = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: AD_CLICK');
			// Custom event
			var my_eVar = this._dataMapping.bc_ad_click.evar.split(",");
			this._appMeasurement.events = this._dataMapping.bc_ad_click.event;
			if (this._adplayer && this._adplayer.adPlayer.currentTime){
				this._appMeasurement[my_eVar[0]] = this._adplayer.adPlayer.currentTime();
			} else {
				this._appMeasurement[my_eVar[0]] = 0;
			}
			this._appMeasurement[my_eVar[1]] = this._adplayer.currentAd.getClickThroughUrl();
			this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_ad_click.evar + ",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType,contextData.a.media.ad.friendlyName,contextData.a.media.ad.podFriendlyName,contextData.a.media.ad.length,contextData.a.media.ad.podPosition";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_ad_click.event;
			this._appMeasurement.tl(true, "o", "bc_ad_click");
		}
	};

	VideoAnalyticsProvider.prototype._onFullscreenEnter = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: FULLSCREEN_ENTER');
			this._appMeasurement.events = this._dataMapping.bc_fullscreen_enter.event;
			this._appMeasurement.linkTrackVars = "events,contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_fullscreen_enter.event;
			this._appMeasurement.tl(true, "o", "bc_fullscreen_enter");
		}
	};

	VideoAnalyticsProvider.prototype._onFullscreenExit = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: FULLSCREEN_EXIT');
			this._appMeasurement.events = this._dataMapping.bc_fullscreen_exit.event;
			this._appMeasurement.linkTrackVars = "events,contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_fullscreen_exit.event;
			this._appMeasurement.tl(true, "o", "bc_fullscreen_exit");
		}
	};

	VideoAnalyticsProvider.prototype._onSocialOpened = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: SOCIAL_OPENED');
			this._appMeasurement.events = this._dataMapping.bc_social_opened.event;
			this._appMeasurement.linkTrackVars = "events,contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents =this._dataMapping.bc_social_opened.event;
			this._appMeasurement.tl(true, "o", "bc_social_opened");
		}
	};

	VideoAnalyticsProvider.prototype._onSocialClosed = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: SOCIAL_CLOSED');
			this._appMeasurement.events = this._dataMapping.bc_social_closed.event;
			this._appMeasurement.linkTrackVars = "events,contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_social_closed.event;
			this._appMeasurement.tl(true, "o", "bc_social_closed");
		}
	};

	// ///////
	// Private helper functions
	// ///////

	VideoAnalyticsProvider.prototype.isAdPlaying = function() {
		return this._adPlaying;
	};

	VideoAnalyticsProvider.prototype.playheadTime = function() {
		return this._playheadTime;
	};


	VideoAnalyticsProvider.prototype.resetTrackValue = function() {
		// reset event
		this._appMeasurement.events  = '';
		this._appMeasurement.linkTrackVars = '';
		this._appMeasurement.linkTrackEvents = '';
		this._appMeasurement.clearVars();
	};

	VideoAnalyticsProvider.prototype._setupAutoTracking = function() {
		this._appMeasurement.loadModule("Media");
		this._appMeasurement.Media.autoTrack = true;
		this._appMeasurement.Media.trackVars = "events,"
			+ this._dataMapping.bc_data_mapping.contentType + ','
			+ this._dataMapping.bc_data_mapping.name + ','
			+ this._dataMapping.bc_data_mapping.segment;
		this._appMeasurement.Media.trackEvents = this._dataMapping.bc_data_mapping.view + ','
		+ this._dataMapping.bc_data_mapping.segmentView + ','
		+ this._dataMapping.bc_data_mapping.timePlayed + ','
		+ this._dataMapping.bc_data_mapping.milestones['25'] + ','
		+ this._dataMapping.bc_data_mapping.milestones['50'] + ','
		+ this._dataMapping.bc_data_mapping.milestones['75'] + ','
		+ this._dataMapping.bc_data_mapping.complete;
		this._appMeasurement.Media.trackMilestones = "25,50,75";
		this._appMeasurement.Media.playerName = this._settings.PLAYER.NAME;
		this._appMeasurement.Media.segmentByMilestones = true;
		this._appMeasurement.Media.trackUsingContextData = true;
		this._appMeasurement.Media.contextDataMapping = {
				"a.media.name" : this._dataMapping.bc_data_mapping.name,
				"a.media.segment" : this._dataMapping.bc_data_mapping.segment,
				"a.contentType" : this._dataMapping.bc_data_mapping.contentType,
				"a.media.timePlayed" : this._dataMapping.bc_data_mapping.timePlayed,
				"a.media.view" : this._dataMapping.bc_data_mapping.view,
				"a.media.segmentView" : this._dataMapping.bc_data_mapping.segmentView,
				"a.media.complete" : this._dataMapping.bc_data_mapping.complete,
				"a.media.milestones" : this._dataMapping.bc_data_mapping.milestones,
		};
	};

	VideoAnalyticsProvider.prototype._setupVideoHeartbeat = function() {
		var configData = new ConfigData(this._settings.HEARTBEAT.TRACKING_SERVER,
				this._settings.HEARTBEAT.JOB_ID, this._settings.HEARTBEAT.PUBLISHER);

		configData.ovp = this._settings.HEARTBEAT.OVP;
		configData.sdk = this._settings.HEARTBEAT.SDK;
		configData.channel = this._settings.HEARTBEAT.CHANNEL;

		// Comment or explicitly set this to false for production sites.
		configData.debugLogging = this._settings.HEARTBEAT.DEBUG_LOGGING;
		this._videoHeartbeat.configure(configData);
	};

	VideoAnalyticsProvider.prototype._initFirstLoad = function(evt) {
		if (!this._hasLoad){
			this._hasLoad = true;
			this._onLoad(evt);
			if (!this._hasInitCustom) {
				this._initSocial();
				this._initVolumeEvent();
				this._hasInitCustom = true;
			}
		}
	};

	VideoAnalyticsProvider.prototype._installEventListeners = function() {
		var that = this;
		// We register as observers to various VideoPlayer events.
		// HTML events
		this._player.on('play', function(evt) {
			if (!that._firstPlay) return;
			// Check for replay video
			if (!that._hasLoad) {
				that._hasLoad = true;
				that._onLoad(evt);
			}
			if (!that._adPlaying){
				that._onPlay(evt);
			}
		});
		this._player.on('pause', function(evt) {
			if (!that._adPlaying){
				that._onPause(evt);
			}
		});
		this._player.on('ended', function(evt) {
			if (!that._adPlaying){
				that._onTrackMilestone(100);
				that._onComplete(evt);
				that._onUnload(evt);
			}
		});
		this._player.on('seeking', function(evt) {
			that._onSeekStart(evt);
		});
		this._player.on('seeked', function(evt) {
			that._onSeekComplete(evt);
		});
		this._player.on('volumechange', function(evt) {
			that._hasVolumeChange = true;
		});
		this._player.on('error', function(evt) {
			that._onError(evt);
		});

		// ads-specific
		this._player.on('adsready', function(evt) {
			o_debug('Player event: adsready');
			that._initAdManager(evt);
		});
		this._player.on('adstart', function(evt) {
			o_debug('Player event: adstart');
			that._adPlaying = true;
			that.resetTrackValue();
			that._onAdStart(evt);
		});
		this._player.on('adend', function(evt) {
			o_debug('Player event: adend');
			that._adPlaying = false;
			that._onAdComplete(evt);
			that._uninstallAdEventListeners();
		});
		this._player.on('ima3error', function(evt) {
			that._adPlaying = false;
			that._uninstallAdEventListeners();
		});
		this._player.on('ima3-ad-error', function(evt) {
			that._adPlaying = false;
			that._uninstallAdEventListeners();
		});

		this._player.on('durationchange', function(evt) {
			o_debug("Player event: durationchange");
			that._initFirstLoad(evt);
		});

		this._player.on('firstplay', function(evt) {
			o_debug("Player event: firstplay");
			// Begin tracking
			that._initFirstLoad(evt);
			that._firstPlay = true;
			if (!that._adPlaying){
				that._onPlay(evt);
			}
		});

		// Tracking mistore
		this._player.on('timeupdate', function(evt) {
			if (that._adPlaying) {
				return;
			}
			that._playheadTime = that._player.currentTime();
			var _duration = that._player.duration();
			if (!that._tracked0  && that._playheadTime > 0){
				that._tracked0 = true;
				that._onTrackMilestone(0);
			}
			if (!that._tracked25 && that._playheadTime > _duration*25/100){
				that._tracked25 = true;
				that._onTrackMilestone(25);
			}
			if (!that._tracked50 && that._playheadTime > _duration*50/100){
				that._tracked50 = true;
				that._onTrackMilestone(50);
			}
			if (!that._tracked75 && that._playheadTime > _duration*75/100){
				that._tracked75 = true;
				that._onTrackMilestone(75);
			}
		});

		this._player.on('fullscreenchange', function(evt) {
			if (that._player.isFullScreen()) {
				that._onFullscreenEnter(evt);
			} else {
				that._onFullscreenExit(evt);
			}
		});
	};

	VideoAnalyticsProvider.prototype._uninstallEventListeners = function() {
		var that = this;
		// We register as observers to various VideoPlayer events.
		// HTML events
		this._player.off('play', function(evt) {});
		this._player.off('pause', function(evt) {});
		this._player.off('ended', function(evt) {});
		this._player.off('seeking', function(evt) {});
		this._player.off('seeked', function(evt) {});
		this._player.off('volumechange', function(evt) {});
		this._player.off('error', function(evt) {});

		// ads-specific event
		this._player.off('adsready', function(evt) {});
		this._player.off('adstart', function(evt) {});
		this._player.off('adend', function(evt) {});
		this._player.off('ima3error', function(evt) {});
		this._player.off('ima3-ad-error', function(evt) {});

		// Brightcove-specific event
		this._player.off('durationchange', function(evt) {});
		this._player.off('firstplay', function(evt) {});
		this._player.off('fullscreenchange', function(evt) {});
	};

	VideoAnalyticsProvider.prototype._initAdManager = function(e) {
		if (this._player && this._player.ima3) {
			this._adplayer = this._player.ima3;
			this._installAdEventListeners();
		}
	};

	VideoAnalyticsProvider.prototype._installAdEventListeners = function() {
		var that = this;
		if (!this._adplayer.adsManager)
			return;
		this._adplayer.adsManager.addEventListener(
				google.ima.AdEvent.Type.STARTED, function(evt) {
					that._onAdHbPlay(evt);
				}, false, this);
		this._adplayer.adsManager.addEventListener(
				google.ima.AdEvent.Type.PAUSED, function(evt) {
					that._onAdHbPause(evt);
					that._onAdPause(evt);
				}, false, this);
		this._adplayer.adsManager.addEventListener(
				google.ima.AdEvent.Type.RESUMED, function(evt) {
					that._onAdHbPlay(evt);
					that._onAdResumed(evt);
				}, false, this);
		this._adplayer.adsManager.addEventListener(
				google.ima.AdEvent.Type.CLICK, function(evt) {
					that._onAdClick(evt);
				}, false, this);
	};

	VideoAnalyticsProvider.prototype._uninstallAdEventListeners = function() {
		if (this._adplayer && this._adplayer.adsManager){
			this._adplayer.adsManager.removeEventListener(
					google.ima.AdEvent.Type.STARTED, function(evt) {
					}, false, this);
			this._adplayer.adsManager.removeEventListener(
					google.ima.AdEvent.Type.PAUSED, function(evt) {
					}, false, this);
			this._adplayer.adsManager.removeEventListener(
					google.ima.AdEvent.Type.RESUMED, function(evt) {
					}, false, this);
			this._adplayer.adsManager.removeEventListener(
					google.ima.AdEvent.Type.CLICK, function(evt) {
					}, false, this);
		}
	};
	VideoAnalyticsProvider.prototype._initVolumeEvent = function() {
		var that = this;

		if (this._player.controlBar.volumeMenuButton) {
			this._volumeMenuButton = this._player.controlBar.volumeMenuButton;
			this._volumeMenuButton.on('click', function(evt) {
				that._checkVolumeChange();
			});
			this._volumeMenuButton.on('touchend', function(evt) {
				that._checkVolumeChange();
			});
		}

		if (document.addEventListener) {
			document.addEventListener('click', function(evt) {
				that._checkVolumeChange();
			});
		} else if (document.on) {
			document.on('click', function(evt) {
				that._checkVolumeChange();
			});
		} else if (document.attachEvent) {
			document.attachEvent('onclick', function(evt) {
				that._checkVolumeChange();
			});
		}

		if (document.addEventListener) {
			document.addEventListener('mouseup', function(evt) {
				that._checkVolumeChange();
			});
		} else if (document.on) {
			document.on('mouseup', function(evt) {
				that._checkVolumeChange();
			});
		} else if (document.attachEvent) {
			document.attachEvent('onmouseup', function(evt) {
				that._checkVolumeChange();
			});
		}
		if (document.addEventListener) {
			document.addEventListener('touchend', function(evt) {
				if (that._hasVolumeChange){
					that._hasVolumeChange = false;
					that._onVolumeChange(evt);
				}
			});
		} else if (document.on) {
			document.on('touchend', function(evt) {
				if (that._hasVolumeChange){
					that._hasVolumeChange = false;
					that._onVolumeChange(evt);
				}
			});
		} else if (document.attachEvent) {
			document.attachEvent('ontouchend', function(evt) {
				if (that._hasVolumeChange){
					that._hasVolumeChange = false;
					that._onVolumeChange(evt);
				}
			});
		}
	};
	VideoAnalyticsProvider.prototype._initSocial = function() {
		var that = this;
		if (this._player.controlBar.socialButton) {
			this._socialButton = this._player.controlBar.socialButton;
			this._socialButton.on('click', function(evt) {
				that._onSocialOpened(evt);
				that._hasSocialOpen = true;
				if (!that._hasInitSocialClose){
					that._initSocialClose();
					that._hasInitSocialClose = true;
				}
			});
			this._socialButton.on('touchend', function(evt) {
				that._onSocialOpened(evt);
				that._hasSocialOpen = true;
				if (!that._hasInitSocialClose){
					that._initSocialClose();
					that._hasInitSocialClose = true;
				}
			});
		}
	};
	VideoAnalyticsProvider.prototype._initSocialClose = function() {
		var that = this;
		console.log("_initSocialClose");
		if (this._player.socialOverlay
				&& this._player.socialOverlay.closeButton) {
			this._socialCloseButton = this._player.socialOverlay.closeButton;
			if (this._socialCloseButton.addEventListener) {
				this._socialCloseButton.addEventListener('click', function(evt) {
					that._checkSocialClose(evt);
				});
			} else if (this._socialCloseButton.on) {
				this._socialCloseButton.on('click', function(evt) {
					that._checkSocialClose(evt);
				});
			} else if (this._socialCloseButton.attachEvent) {
				this._socialCloseButton.attachEvent('onclick', function(evt) {
					that._checkSocialClose(evt);
				});
			}
		}
		// Check esc key down
		document.onkeydown = function (evt)
		{
			if (!evt) evt = event;
			if (evt.keyCode == 27){
				that._checkSocialClose(evt);
			}
		}
	};
	VideoAnalyticsProvider.prototype._checkSocialClose = function(evt) {
		var that = this;
		if (this._hasSocialOpen){
			setTimeout(function(){
				if (that._player.socialOverlay.el_.offsetParent === null){
					that._onSocialClosed(evt);
					that._hasSocialOpen = false
				}
			}, 500);
		}
	}
	VideoAnalyticsProvider.prototype._checkVolumeChange = function(evt) {
		var that = this;
		setTimeout(function(){
			if (that._hasVolumeChange){
				that._hasVolumeChange = false;
				that._onVolumeChange(evt);
			}
		}, 500);
	}

	// Export symbols.
	window.VideoAnalyticsProvider = VideoAnalyticsProvider;
})(window.ADB, window.VideoPlayerDelegate);

/** ************************ PLUGINS SECTION ************************ */
/**
 * Omniture analytic plugin for video.js.
 *
 */
(function(window, document, vjs, undefined) {
	"use strict";
	var
	/**
	 * Copies properties from one or more objects onto an original.
	 */
	extend = function(obj /* , arg1, arg2, ... */) {
		var arg, i, k;
		for (i = 1; i < arguments.length; i++) {
			arg = arguments[i];
			for (k in arg) {
				if (arg.hasOwnProperty(k)) {
					obj[k] = arg[k];
				}
			}
		}
		return obj;
	},

	/** ************************ CONFIG SECTION ************************* */
	// default custom Event Mapping
	customMapping = {
			disable : false,
			bc_data_mapping : {
				name : "eVar202,prop2",
				segment : "eVar203",
				contentType : "eVar201",
				timePlayed : "event203",
				view : "event201",
				segmentView : "event202",
				complete : "event207",
				milestones : {
					25 : "event204",
					50 : "event205",
					75 : "event206"
				}
			},
			bc_volumechange : {
				event : 'event208',
				evar : 'eVar204'
			},
			bc_ad_pause : {
				event : 'event209',
				evar : 'eVar205' // currentTime
			},
			bc_ad_resumed : {
				event : 'event210',
				evar : 'eVar205' // currentTime
			},
			bc_ad_click : {
				event : 'event211',
				evar : 'eVar206,eVar207'// eVar206: currentTime and
										// eVar207:clickThroughUrl
			},
			bc_fullscreen_enter : {
				event : 'event212',
				evar : ''
			},
			bc_fullscreen_exit : {
				event : 'event213',
				evar : ''
			},
			bc_social_opened : {
				event : 'event214',
				evar : ''
			},
			bc_social_closed : {
				event : 'event215',
				evar : ''
			}
	},
	// default plugin settings
	defaults = {
			PLAYER : {
				NAME : 'Brightcove Player'
			},
			VISITOR_API : {
				MARKETING_CLOUD_ORG_ID : '2B8D246452DD9FBF0A490D45',
				NAMESPACE : 'democorp',
				TRACKING_SERVER : 'democorp.dc1.sc.omtrdc.net'
			},
			APP_MEASUREMENT : {
				RSID : 'democorpscdocdev',
				TRACKING_SERVER : 'democorp.dc1.sc.omtrdc.net'
			},
			HEARTBEAT : {
				TRACKING_SERVER : 'http://heartbeats.omtrdc.net',
				JOB_ID : 'sc_va',
				PUBLISHER : '',
				CHANNEL : 'Brightcove-channel',
				OVP : 'Brightcove-ovp',
				SDK : 'Brightcove-sdk',
				DEBUG_LOGGING : true
			},
			CUSTOM_EVENT : customMapping
	},
	// ---------------------------------------------------------------------------
	// Omniture Plugin
	// ---------------------------------------------------------------------------

	omniturePlugin = function(options) {
		var player = this;
		// merge options and defaults
		var settings = extend({}, defaults, options || {});
		// Set-up the VisitorAPI component.
		var visitor = new Visitor(settings.VISITOR_API.MARKETING_CLOUD_ORG_ID,
				settings.VISITOR_API.NAMESPACE);
		visitor.trackingServer = settings.VISITOR_API.TRACKING_SERVER;

		// Set-up the AppMeasurement component.
		var appMeasurement = new AppMeasurement();
		appMeasurement.visitor = visitor;
		appMeasurement.visitorNamespace = settings.VISITOR_API.NAMESPACE;
		appMeasurement.trackingServer = settings.APP_MEASUREMENT.TRACKING_SERVER;
		appMeasurement.account = settings.APP_MEASUREMENT.RSID;

		// Create the Analytics provider
		var analyticsProvider = new VideoAnalyticsProvider(appMeasurement,
				player, settings);
	};

	// register the omniture plugin framework
	vjs.plugin('omniturePlugin', omniturePlugin);

})(window, document, videojs);