var OneSignal = window.OneSignal || [];
var initConfig = {
    appId: "47181cdc-c81b-40f1-b9a0-680e243a90bd",
    autoRegister: true,

    notifyButton: {
        enable: true
    },
    welcomeNotification: {
        "title": "Diario Libre",
        "message": "¡Gracias por suscribirte!",
        // "url": "" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */
    },
    promptOptions: {
        /* actionMessage limited to 90 characters */
        actionMessage: "Nos gustaría mostrarle notificaciones de las Últimas noticias y actualizaciones.",
        /* acceptButtonText limited to 15 characters */
        acceptButtonText: "Aceptar",
        /* cancelButtonText limited to 15 characters */
        cancelButtonText: "Cancelar"
    }
};



OneSignal.push(function () {
    OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/onesignal/' };
    OneSignal.SERVICE_WORKER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
    OneSignal.SERVICE_WORKER_UPDATER_PATH = 'push/onesignal/OneSignalSDKWorker.js'
    OneSignal.init(initConfig);
});


OneSignal.push(function () {
    OneSignal.on('permissionPromptDisplay', function (permissionChange) {

        gtag('event', 'notification_prompt', {
            'event_category': 'notification_prompt',
            'action': 'displayed'
        });

    });
});



OneSignal.push(function () {
    // Occurs when the user's subscription changes to a new value.
    OneSignal.on('notificationPermissionChange', function (permissionChange) {
        var currentPermission = permissionChange.to;
        console.log('New permission state:', currentPermission);

        gtag('event', 'notification_permission_change', {
            'event_category': 'notification_permission_change',
            'action': currentPermission
        });


    });
});

OneSignal.push(["addListenerForNotificationOpened", function (data) {
    console.log("Received NotificationOpened:");
    console.log(data);
    console.log(data.id);
    console.log(data.heading);
    OneSignal.getUserId(function (userId) {
        console.log("OneSignal User ID:", userId);
        // Make a POST call to GA with the notification data and userId aka playerId
        //ga('send', 'event', 'Notification_Clicked', data.id, userId);


        gtag('event', 'Notification_Clicked', {
            'event_category': 'Notification_Clicked',

            'event_label': data.id,
            'value': userId,

        });

    });
}]);

