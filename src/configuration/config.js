// adobe configuration options; name of variable can be changed to meet user requirements
var bcgs_adobe_config = {
    
    VISITOR_API : {
        MARKETING_CLOUD_ORG_ID : '32C933CE52784DCE0A490D4D@AdobeOrg',
        NAMESPACE : 'bcgs-test',
        TRACKING_SERVER : 'bcgs-test.sc.omtrdc.net'
    },
    
    APP_MEASUREMENT : {
        RSID : "bc-mikey-test",
        TRACKING_SERVER : 'bcgs-test.sc.omtrdc.net'
    },
    
    HEARTBEAT : {
        DISABLE : false, // disable if using milestone tracking
        TRACKING_SERVER : 'hb-fa-1.omtrdc.net',
        JOB_ID : 'sc_va',
        PUBLISHER : '32C933CE52784DCE0A490D4D@AdobeOrg',
        OVP : 'Brightcove',
        SDK : '1.5.2',
        DEBUG_LOGGING : false // sitecatalyst-specific logging - set to false for production
    },
    
    QUALITY: {
        TIME_TO_START: 0
    },
    
    CUSTOM_EVENT : {
        disable : true, // disable if using heartbeat tracking
        bc_data_mapping : {
            name : "eVar106,prop2", // video name, accepts multiple eVars/props
            segment : "eVar203", // current milestone (e.g., '1:M:0-25')
            contentType : "eVar201", // content type (e.g., 'video' or 'ad')
            timePlayed : "event203", // amount of time played since last tracking event, tracked with milestone events
            view : "event201", // video start event
            segmentView : "event202", // general milestone tracking event, tracked with milestone events
            complete : "event207", // video complete event
            milestones : { // milestones in percent; milestones can be added/removed from list
                25 : "event204", // 25%
                50 : "event205", // 50%
                75 : "event206" // 75%
            }
        },
        // keep to track volume change events
        bc_volumechange : {
            event : 'event208', // event tracking number
            evar : 'prop1' // the new volume chosen by the user (from 0-1.00), only one prop/eVar supported here
        },
        // keep to track when user has paused an ad
        bc_ad_pause : {
            event : 'event209', // event tracking number
            evar : 'eVar205' // time value of pausing an ad, only one prop/eVar supported here
        },
        // keep to track when user enters full screen mode
        bc_fullscreen_enter : {
            event : 'event212' // event tracking number
        },
        // keep to track when user exits full screen mode
        bc_fullscreen_exit : {
            event : 'event213' // event tracking number
        },
        // keep to track when user opens social share menu
        bc_social_opened : {
            event : 'event214' // event tracking number
        },
        // keep to track when user closes social share menu
        bc_social_closed : {
            event : 'event215' // event tracking number
        }
    }
};