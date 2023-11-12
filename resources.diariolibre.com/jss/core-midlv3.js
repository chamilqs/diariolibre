var bc_date = new Date();
var isLogin = false;
var IsDetailPage = false;
let useremail, bCClient, bcProfile, tokenn, is_completed, returnURL, toAction, OneSignal_Player_ID, loginNow = false, new_user;

window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

if (window.location.pathname == "/mi-dl") {
    $.get("/ctrlBloqueEnPortadaMIDL").done(function (data) {
        $("#enportadaUser").append(data);
        var myLazyLoad = new LazyLoad({
            elements_selector: ".lazy",
            threshold: 0
        });
    });
}

const firebaseConfig = {
    apiKey: "AIzaSyAXEj6lbq- qwBQN7Hzjx5aW9uS21G3IZec",
    authDomain: "grupodiariolibre-com.firebaseapp.com",
    databaseURL: "https://grupodiariolibre-com.firebaseio.com",
    projectId: "grupodiariolibre-com",
    storageBucket: "grupodiariolibre-com.appspot.com",
    messagingSenderId: "424871605217",
    appId: "1:424871605217:web:2cc4c3f0ad64fa240298a0",
    measurementId: "G-TMXS1NKZR5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const BASE_URI = 'https://us-central1-grupodiariolibre-com.cloudfunctions.net/api/v1';
const MI_DL = 'mi-dl';
const BASE_SITE = 'https://diariolibre.com';
var user = null;
const app_id = '47181cdc-c81b-40f1-b9a0-680e243a90bd';//'';  //512ce692-9589-4514-a679-ddc1585400f5

function getAvatar() {
    var avatars = ["01", "02", "03", "04", "05", "06", "07", "08"];
    var rand = Math.floor(Math.random() * avatars.length);

    return 'https://assets.diariolibre.com/img/midl/miDLavatar-' + avatars[rand] + '.png';
}


// Is BlueConic loaded?
if (typeof window.blueConicClient !== 'undefined' &&
    typeof window.blueConicClient.event !== 'undefined' &&
    typeof window.blueConicClient.event.subscribe !== 'undefined') {
    profile = blueConicClient.profile.getProfile();
    bcProfile = profile;
    bCClient = blueConicClient;
    var properties = ['DL_Name', 'bc_dev_login_address', 'DL_Nationality', 'OneSignal_Player_ID'];
    profile.loadValues(properties, this, function () {
        var DL_Name = profile.getValue('DL_Name');
        var bc_dev_login_address = profile.getValue('bc_dev_login_address');
        var DL_Nationality = profile.getValue('DL_Nationality');
    });

} else {
    // Not yet loaded; wait for the "onBlueConicLoaded" event
    window.addEventListener('onBlueConicLoaded', function () {
        // BlueConic is loaded, now we can do API things
        profile = blueConicClient.profile.getProfile();
        bcProfile = profile;
        bCClient = blueConicClient;
        var properties = ['DL_Name', 'bc_dev_login_address', 'DL_Nationality', 'OneSignal_Player_ID'];
        profile.loadValues(properties, this, function () {
            var DL_Name = profile.getValue('DL_Name');
            var bc_dev_login_address = profile.getValue('bc_dev_login_address');
            var DL_Nationality = profile.getValue('DL_Nationality');

        });
    }, false);
}

function loginbtn() {
    var email = $("#login_correo").val();
    var password = $("#login_pass").val();
    $("#msgLogin").css("display", "none");
    if (email.length > 0 && password.length > 0) {
        isLogin = true;
        $("#spinnerloadlogin").css("display", "block");
        LoginAuth(email, password);
    } else {
        $("#msgLogin").css("display", "block");
    }
}

$("#frmlogin").submit(function () {
    loginbtn();
    return false;
});

$("#registerUser").submit(function () {
    var name = $("#register_name").val();
    var username = $("#register_surname").val();
    var email = $("#register_correo").val();
    var password = $("#register_pass").val();
    var password2 = $("#register_pass_again").val();
    $("#msgRegistro").css("display", "block");
    if (password != password2) {
        $("#msgRegistro").css("display", "block");
        $("#msgRegistro span").text("Favor de revisar las contraseñas");
        return false;
    }
    $("#spinnerloadregistro").css("display", "block");
    registerAuth(email, password);
    return false;
});

$("#updateUser").submit(function () {
    $("#spinnerloadupdate").css("display", "none");
    var user = firebase.auth().currentUser;
    user.getIdToken().then(function (token) {
        updateExtraData(token, true);
    });
    return false;
});


$("#changePassword").submit(function () {
    var oldPass = $("#old_pass").val();
    var new_pass = $("#new_pass").val();
    var new_pass_again = $("#new_pass_again").val();
    $("#msgchangePassword").css("display", "none");
    if (new_pass != new_pass_again) {
        $("#msgchangePassword").css("display", "block");
        $("#msgchangePassword").text("Favor de validar las contraseñas, no coinciden.");
        return false;
    }

    $("#spinnerloadchangePassword").css("display", "block");
    passwordChange(oldPass, new_pass);

    return false;
});


function passwordChange(password, new_password) {
    firebase.auth()
        .signInWithEmailAndPassword(firebase.auth().currentUser.email, password)
        .then(function (user) {
            firebase.auth().currentUser.updatePassword(new_password).then(function () {
                $("#msgchangePassword").css("display", "block");
                $("#spinnerloadchangePassword").css("display", "none");
                $("#msgchangePassword").text("Contraseña actualizada correctamente");
                setTimeout(function () { $(".change-pass-container").css("display", "none"); }, 1000);
            }).catch(function (err) {

                var values = returnMessages(err.code);
                $("#msgchangePassword").css("display", "block");
                $("#spinnerloadchangePassword").css("display", "none");
                $("#msgchangePassword").text(values);
            });
        }).catch(function (err) {
            var values = returnMessages(err.code);
            $("#msgchangePassword").css("display", "block");
            $("#spinnerloadchangePassword").css("display", "none");
            $("#msgchangePassword").text(values);
        });
}


$("#reset-password").submit(function () {
    var email = $("#recover_correo").val();
    $("#recoverloadupdate").css("display", "block");
    sendEmail(email, "resetPassword");
    return false;
});

$("#update-password").submit(function () {

    var pass = $("#new_password").val();
    var pass1 = $("#new_password2").val();
    if (pass != pass1) {
        $("#passRegistro").css("display", "block");
        $("#passRegistro span").text("Favor de validar las contraseñas");
        return false;
    }
    $("#update-passwordload").css("display", "block");
    var code = findGetParameter("oobCode");
    handleResetPassword(code);
    return false;
});

function sendEmail(email, mode) {

    var settings = {
        "async": false,
        "url": BASE_URI + "/notification",
        "method": "POST",
        "timeout": 0,
        "data": {
            mode: mode,
            email: email
        }
    };

    $.ajax(settings).done(function (response) {
        $("#recoverloadupdate").css("display", "none");
        $("#recoverRegistro").css("display", "block");
        $("#recoverRegistro span").text(response.message);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        $("#recoverloadupdate").css("display", "none");
        var values = JSON.parse(jqXHR.responseText);
        var first = returnMessages(values.code);
        $("#recoverRegistro").css("display", "block");
        $("#recoverRegistro span").text(first);
        return;
    });

}


function LoginAuth(email, password) {
    loginNow = true;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        isLogin = false;
        loginNow = false;
        var errorCode = error.code;
        var errorMessage = error.message;

        var msg = returnMessages(errorCode);
        $("#spinnerloadlogin").css("display", "none");
        $("#msgLogin").css("display", "block");
        $("#msgLogin span").text(msg);

        return false;
    });

    return true;

}
function registerAuth(email, password) {
    loginNow = true;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        loginNow = false;
        var errorCode = error.code;
        var msg = returnMessages(errorCode);
        $("#spinnerloadregistro").css("display", "none");
        $("#msgRegistro").css("display", "block");
        $("#msgRegistro span").text(msg);

        return false;

    });

    return true

}

function logoutAuth() {
    firebase.auth().signOut().then(function () {
        document.cookie = "_MIDL=;path=/;max-age=0";
        return true;

    }).catch(function (error) {

        console.log(error)

        return false;

    });
}


function getToken() {

    return firebase.auth().currentUser.getIdToken();

}

function showAlert(errorMsg, field) {
    $(".sbr_input").removeClass("error");
    $(".alert-box.error span").text(errorMsg);
    if (field == "email") {
        $("#auth-email").addClass("error");
    } else if (field == "password") {
        $("#auth-pass").addClass("error");
        $("#auth-pass2").addClass("error");
    } else {
        $(".sbr_input").addClass("error");
    }
    $(".alert-box.error").show(100);
}

$("#upload_avatar").change(function () {
    changeImages();
});

async function changeImages() {
    var domain = window.location.host == "localhost" ? "http://localhost/diariolibre" : ""

    var file = $('#upload_avatar')[0].files[0];
    var frmData = new FormData();
    frmData.append("image", file);

    var settings = {
        "url": domain + "/funcionalidades/user/index.aspx",
        "method": "POST",
        "data": frmData,
        "contentType": false,
        "processData": false
    };
    $.ajax(settings).done(function (data) {
        $("#imgUser").attr("src", data);
        $("#imgUserHeader").attr("src", data);
        var user = firebase.auth().currentUser;
        user.getIdToken().then(function (token) {
            updateConfigUserImg(token, data, true);
        });
    });
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

var box = {
    resize: function () {
        var w = $('body').width();
        if (w <= 845) {
            $('.sbr_tabs .t1').html('Acceder');
            $('.sbr_tabs .t2').html('Registrarme');
        } else {
            $('.sbr_tabs .t1').html('Iniciar sesiÃ³n');
            $('.sbr_tabs .t2').html('Crear cuenta');
        }
    },
    tab: function (a) {
        a = $(a);

        $('.sbr_tabs li').removeClass('active');
        a.addClass('active');

        if (a.hasClass('t2')) {
            $('.sbrSignupCont').show();
            $('.sbrLoginCont').hide();
        } else {
            $('.sbrSignupCont').hide();
            $('.sbrLoginCont').show();
        }

        var tabClass = a[0].classList[0];

        $("#userContent").children().removeClass("active");
        $("#" + tabClass).addClass("active");

    }
}

box.resize();
$(window).resize(box.resize);

$(".logout_btn").on("click", function () {
    firebase.auth().signOut().then(function () {
        window.localStorage.removeItem('miDL_user');
        window.location.replace("login");
    }, function (error) {
        console.log(error);
    });
});

$(".sidebar_cont").on("click", ".sbc_logout_btn", function () {
    firebase.auth().signOut().then(function () {
        console.log("signout sidebar");
        window.localStorage.removeItem('miDL_user');
        location.reload(true);
    }, function (error) {
        console.log(error);
    });
});

$(".sbc_logout_btn").on("click", function () {
    firebase.auth().signOut().then(function () {
        window.localStorage.removeItem('miDL_user');
        location.reload(true);
    }, function (error) {
        console.log(error);
    });
});


function getCookie(name) {
    var cookie = document.cookie;
    var prefix = name + "=";
    var begin = cookie.indexOf("; " + prefix);
    if (begin == -1) {
        begin = cookie.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = cookie.length;
        }
    }
    return unescape(cookie.substring(begin + prefix.length, end));
}


var delete_cookie = function (name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};


var delete_all_article_cookies = function () {
    document.cookie = 'addTopic=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'addArticle=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'addArticleURL=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

//    Function to read the value of a specified cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

//Funcion that know what the user is triyin to do
function isDoing(whatIsTriying) {
    return whatIsTriying;
}


function updateUserAccount(update = false) {
    var user = firebase.auth().currentUser;

    console.log("updateUserAccount");

    if (!user) {
        requireLogin("Inicia sesión en Mi DL para poder remover esta noticia", "/mi-dl/login");
        return;
    } else {

        user.getIdToken().then(function (token) {


            let ls = JSON.parse(window.localStorage.getItem('miDL_user'));


            var settings = {
                "url": BASE_URI + "/accounts",
                "method": "PUT",
                "timeout": 0,
                "headers": {
                    "Authorization": token,

                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({
                    "show_guide": ls
                })
            };
            $.ajax(settings).done(function (response) {
                console.log(response);
                if (update) {
                    location.reload(true);
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
            });

        });
    }
}


function updateBcProfile(token, is_complete, email) {

    var is_email_bc = '';
    //var real_email = email ? useremail: email;


    if ($.trim(bcProfile.getValues('bc_dev_login_address')) == email) {
        is_email_bc = 'reconfirmado';
    } else {

        bcProfile.setValue("bc_dev_login_address", email);
        bCClient.profile.updateProfile();
        is_email_bc = 'actualizado';
    }

    //val.list_id == value.id ? val.list_id: null

    var settings = {
        "url": BASE_URI + "/accounts",
        "method": "PUT",
        "timeout": 0,
        "cache": true,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": token

        },
        "data": {
            "bc_profileid": bcProfile.getId(),
            "onesignal_playerid": OneSignal_Player_ID,
            "is_email_bc": is_email_bc,
            "email": email
        }
    }

    $.ajax(settings).done(function (response) {
        console.log("bc update profile", response);

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(jqXHR.responseJSON);
        console.log(errorThrown);
    });

    //return false;
}

function updateConfigUserImg(token, imgAvatar, update = false) {

    var authEmail = $("#contacto_correo").val();
    var authName = $("#contacto_nombre").val();
    var authLastName = $("#contacto_apellido").val();
    var authGenero = $("#contacto_genero").val();
    var authbirthday = $("#datepicker").val();
    var authPais = $("#contacto_pais").val();
    var authPhoto = imgAvatar;



    var is_email_bc = false;
    let perfiles = { "informacion": false, "notificaciones": false, "preferencia": false };
    let show_guide = { "email": authEmail, fullName: $.trim(`${authName} ${authLastName}`), "article": false, "miDL": false, "perfiles": perfiles }

    var settings = {
        "url": BASE_URI + "/accounts",
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": token,
            "email": authEmail
        },
        "data": {
            "name": authName,
            "last_name": authLastName,
            "email": authEmail,
            "birth_day": authbirthday,
            "country": authPais,
            "gender": authGenero,
            "avatar": authPhoto,
            "is_complete": true,
            "show_guide": show_guide
            //"is_email_bc": is_email_bc
        }
    };



    $.ajax(settings).done(function (response) {


        window.localStorage.setItem('miDL_user', JSON.stringify(show_guide));
        localStorage.setItem("imgAvatarUserMIDL", response.data.avatar);

        let fn = `${authName} ${authLastName}`;
        let maxage = 60 * 60 * 24 * 365;
        document.cookie = "_MIDL=true;path=/;max-age=" + maxage;

        if (!localIsUpdate) {
            sendWelcome(fn, authEmail);
            setTimeout(sendBeneficios(fn, authEmail), 1000);
            setTimeout(sendEmail(authEmail, "signup"), 2000);
        }
        localIsUpdate = false;
        updateUserAccount();

        var user = firebase.auth().currentUser;
        var actual_email = firebase.auth().currentUser.email;

        updateBcProfile(token, true, authEmail);

        $("#spinnerloadConfUser").css("display", "none");

        user.updateProfile({
            photoURL: authPhoto,
            displayName: authName + ' ' + authLastName
        }).then(function () {

            profile.setValue("bc_dev_login_address", authEmail);
            //profile.setValue("date_subscription_midl", bc_date);  

            bcProfile.setValue("date_subscription_midl", bc_date.toISOString());

            blueConicClient.profile.updateProfile(this, function () {
                console.log("BC updated");
            });

        }).catch(function (error) {

        });

    }).fail(function (error) {
        console.log(error);
    });
}


function updateConfigUser(token, update = false) {

    var authEmail = $("#contacto_correo").val();
    var authName = $("#contacto_nombre").val();
    var authLastName = $("#contacto_apellido").val();
    var authGenero = $("#contacto_genero").val();
    var authbirthday = $("#datepicker").val();
    var authPais = $("#contacto_pais").val();
    var authPhoto = "";

    if (firebase.auth().currentUser.photoURL !== null) {
        authPhoto = firebase.auth().currentUser.photoURL;
    } else {
        authPhoto = getAvatar();
    }



    var is_email_bc = false;
    let perfiles = { "informacion": false, "notificaciones": false, "preferencia": false };
    let show_guide = { "email": authEmail, fullName: $.trim(`${authName} ${authLastName}`), "article": false, "miDL": false, "perfiles": perfiles }

    var settings = {
        "url": BASE_URI + "/accounts",
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": token,
            "email": authEmail
        },
        "data": {
            "name": authName,
            "last_name": authLastName,
            "email": authEmail,
            "birth_day": authbirthday,
            "country": authPais,
            "gender": authGenero,
            "avatar": authPhoto,
            "is_complete": true,
            "show_guide": show_guide
            //"is_email_bc": is_email_bc
        }
    };



    $.ajax(settings).done(function (response) {


        window.localStorage.setItem('miDL_user', JSON.stringify(show_guide));
        localStorage.setItem("imgAvatarUserMIDL", response.data.avatar);

        let fn = `${authName} ${authLastName}`;
        let maxage = 60 * 60 * 24 * 365;
        document.cookie = "_MIDL=true;path=/;max-age=" + maxage;

        if (!localIsUpdate) {
            sendWelcome(fn, authEmail);
            setTimeout(sendBeneficios(fn, authEmail), 1000);
            setTimeout(sendEmail(authEmail, "signup"), 2000);
        }
        localIsUpdate = false;
        updateUserAccount();

        var user = firebase.auth().currentUser;
        var actual_email = firebase.auth().currentUser.email;

        updateBcProfile(token, true, authEmail);

        $("#spinnerloadConfUser").css("display", "none");

        user.updateProfile({
            photoURL: authPhoto,
            displayName: authName + ' ' + authLastName
        }).then(function () {

            profile.setValue("bc_dev_login_address", authEmail);
            //profile.setValue("date_subscription_midl", bc_date);  

            bcProfile.setValue("date_subscription_midl", bc_date.toISOString());

            blueConicClient.profile.updateProfile(this, function () {
                console.log("BC updated");
            });

        }).catch(function (error) {

        });

    }).fail(function (error) {
        console.log(error);
    });
}


function updateExtraData(token, update = false) {

    var authEmail = !update ? $("#register_correo").val() : $("#update_correo").val();
    var authName = !update ? $("#register_name").val() : $("#update_name").val();
    var authSurname = !update ? $("#register_surname").val() : $("#update_surname").val();
    var authPhoto = "";

    if (firebase.auth().currentUser.photoURL !== null) {
        authPhoto = firebase.auth().currentUser.photoURL;
    } else {
        authPhoto = getAvatar();
    }

    authSurname = authSurname ? authSurname : '';

    var is_email_bc = false;
    let perfiles = { "informacion": false, "notificaciones": false, "preferencia": false };
    let show_guide = { "email": authEmail, fullName: $.trim(`${authName} ${authSurname}`), "article": false, "miDL": false, "perfiles": perfiles }

    var settings = {
        "url": BASE_URI + "/accounts",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": token,
            "email": authEmail
        },
        "data": {
            "name": authName,
            "last_name": authSurname,
            "email": authEmail,
            "avatar": authPhoto,
            "is_complete": true,
            "show_guide": show_guide
            //"is_email_bc": is_email_bc
        }
    };



    $.ajax(settings).done(function (response) {

        window.localStorage.setItem('miDL_user', JSON.stringify(show_guide));
        localStorage.setItem("imgAvatarUserMIDL", response.data.avatar);

        let fn = `${authName} ${authSurname}`;
        let maxage = 60 * 60 * 24 * 365;
        document.cookie = "_MIDL=true;path=/;max-age=" + maxage;

        if (!localIsUpdate) {
            sendWelcome(fn, authEmail);
            setTimeout(sendBeneficios(fn, authEmail), 1000);
            setTimeout(sendEmail(authEmail, "signup"), 2000);
        }
        localIsUpdate = false;
        updateUserAccount(update);

        var user = firebase.auth().currentUser;
        var actual_email = firebase.auth().currentUser.email;

        updateBcProfile(token, true, authEmail);


        user.updateProfile({
            photoURL: authPhoto,
            displayName: authName + ' ' + authSurname
        }).then(function () {

            profile.setValue("bc_dev_login_address", authEmail);
            //profile.setValue("date_subscription_midl", bc_date);  

            bcProfile.setValue("date_subscription_midl", bc_date.toISOString());

            blueConicClient.profile.updateProfile(this, function () {
                console.log("BC updated");
            });

            if (window.location.pathname != "/mi-dl" && !IsDetailPage && !IsDetailPageTopic) {
                window.location.replace("/mi-dl")
            } else if (!IsDetailPage && !IsDetailPageTopic) {
                displayName(response.data, token);
            } else if (IsDetailPage) {
                closeModal();
                if (!IsDetailPageTopic) {
                    saveNoteMiDL();
                } else {
                    addTopic(topicId, true);
                }
            }

        }).catch(function (error) {

        });

    }).fail(function (error) {
        console.log(error);
    });
}

firebase.auth().languageCode = 'es';

let authEmail = $("#auth-email-login").val();
let authPass = $("#auth-pass-login").val();


function callGoogleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        setTimeout(userStatus(result.additionalUserInfo, 1000));
        loginNow = true;
        useremail = result.user.providerData[0].email;
        window.localStorage.removeItem('miDL_user');

    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        $("#loginForm .sbr_btn.gl.social").html('<img src="//assets.diariolibre.com/img/midl/w.gl.svg" alt=""> Google').removeAttr("disabled");
    });
}

function facebookSignIn(event) {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)

        .then(function (result) {
            setTimeout(userStatus(result.additionalUserInfo, 1000));
            loginNow = true;
            useremail = result.user.providerData[0].email;
            window.localStorage.removeItem('miDL_user');

        }).catch(function (error) {
            console.log(error.code);
            console.log(error.message);
            $("#loginForm .sbr_btn.fb.social").html('<img src="//assets.diariolibre.com/img/midl/w.fb.svg" alt=""> Facebook').removeAttr("disabled");
        });
}

function firebaseAuth(authEmail, authPass, authPass2) {
    if (authPass != "" && authPass == authPass2) {
        firebase.auth().createUserWithEmailAndPassword(authEmail, authPass)
            .then(function (result) {
                setTimeout(userStatus(result.additionalUserInfo, 1000));
                loginNow = true;
                useremail = authEmail;
                window.localStorage.removeItem('miDL_user');
            }).catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);

                var values = showErrorMsg(errorCode);
                var first = values[0];
                var second = values[1];

                showAlert(first, second);

                return false;
            });
    } else {

        var first = "Las contraseÃ±as no coinciden";
        var second = "password";
        showAlert(first, second);

        return false;

    }
}

function firebaseLogIn(authEmail, authPass) {
    if (authEmail != "" || authPass != "") {
        firebase.auth().signInWithEmailAndPassword(authEmail, authPass)
            .then(function (result) {
                setTimeout(userStatus(result.additionalUserInfo, 1000));
                $(".sbrLoginCont .sbr_input").removeClass("error");
                $(".sbrLoginCont .alert-box").hide();
                loginNow = true;

                useremail = authEmail;
                window.localStorage.removeItem('miDL_user');

                loadUserData(tokenn);

            }).catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
                var values = showErrorMsg(errorCode);
                var first = values[0];
                var second = values[1];

                showAlertLogin(first, second);
                console.log(first);
                console.log(second);
                $("#loginForm .sbr_btn.email").html("Iniciar sesiÃ³n").removeAttr("disabled");

                return false;
            });
    } else {

        var first = "Debe ingresar correo y contraseÃ±a";
        var second = "all";
        showAlertLogin(first, second);
        console.log(first);
        console.log(second);
        return false;

    }
}

function sendingEmails(fn, authEmail) {
    sendWelcome(fn, authEmail);
    setTimeout(sendBeneficios(fn, authEmail), 1000);

}
function userStatus(status) {

    let user = firebase.auth().currentUser, providerId = user.providerData[0].providerId, provider;
    new_user = status.isNewUser;

    if (user) {

        switch (providerId) {
            case "facebook.com":
                provider = "facebook";
                break;
            case "google.com":
                provider = "google";
                break;
            default:
                provider = "password";
                break;
        }

        new_user
            ?

            gtag('event', 'midl_registro', {
                'event_category': 'registro',
                'event_label': provider
            })
            :
            gtag('event', 'midl_login', {
                'event_category': 'login',
                'event_label': provider
            });

    }
}

function sendBeneficios(name, email) {

    var settings = {
        "async": true,
        "url": `https://sendit.grupodiariolibre.com/beneficios`,
        "method": "GET",
        "timeout": 0,
        data: {
            name: $.trim(name),
            email: $.trim(email)
        }
    };

    $.ajax(settings).done(function (response) {

        console.log("beneficios", response);

    }).fail(function (jqXHR, textStatus, errorThrown) {

    });

}

function sendWelcome(name, email) {

    var settings = {
        "async": true,
        "url": `https://sendit.grupodiariolibre.com/welcome`,
        "method": "GET",
        "timeout": 0,
        data: {
            name: $.trim(name),
            email: $.trim(email)
        }
    };

    $.ajax(settings).done(function (response) {

        console.log("welcome", response);

    }).fail(function (jqXHR, textStatus, errorThrown) {

    });

}


function updateBcProfile(token, is_complete, email) {

    var is_email_bc = '';


    if ($.trim(bcProfile.getValues('bc_dev_login_address')) == email) {
        is_email_bc = 'reconfirmado';
    } else {

        bcProfile.setValue("bc_dev_login_address", email);
        bCClient.profile.updateProfile();
        is_email_bc = 'actualizado';
    }


    var settings = {
        "url": BASE_URI + "/accounts",
        "method": "PUT",
        "timeout": 0,
        "cache": true,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": token

        },
        "data": {
            "bc_profileid": bcProfile.getId(),
            "onesignal_playerid": OneSignal_Player_ID,
            "is_email_bc": is_email_bc,
            "email": email
        }
    }

    $.ajax(settings).done(function (response) {
        console.log("bc update profile", response);

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(jqXHR.responseJSON);
        console.log(errorThrown);
    });

}

$("#registerForm, #loginForm").submit(function (e) {
    e.preventDefault();
});

function showAlert(errorMsg, field) {
    $(".sbrSignupCont .sbr_input").removeClass("error");
    $(".sbrSignupCont .alert-box span").text(errorMsg);
    if (field == "email") {
        $("#auth-email").addClass("error");
    } else if (field == "password") {
        $("#auth-pass").addClass("error");
        $("#auth-pass2").addClass("error");
    } else if (field == "all") {
        $(".sbrSignupCont .sbr_input").addClass("error");
    } else {
        $(".sbrSignupCont .sbr_input").addClass("error");
    }
    $(".sbrSignupCont .alert-box").show(100);
}

function showAlertLogin(errorMsg, field) {
    $(".sbrLoginCont .sbr_input").removeClass("error");
    $(".alert-box-login span").text(errorMsg);
    if (field == "email") {
        $(".sbrLoginCont #auth-email-login").addClass("error");
    } else if (field == "password") {
        $(".sbrLoginCont #auth-pass-login").addClass("error");
    } else if (field == "all") {
        $(".sbrLoginCont .sbr_input").addClass("error");
    } else {
        $(".sbrLoginCont .sbr_input").addClass("error");
    }
    $(".alert-box-login").show(100);
}
var localIsUpdate = false;
$("#frmConfigUser").submit(function () {
    localIsUpdate = true;
    var user = firebase.auth().currentUser;
    $("#spinnerloadConfUser").css("display", "block");
    user.getIdToken().then(function (token) {
        updateConfigUser(token, true);
    });
    return false;
});


$("#auth-email-login").on('keyup change', function () {
    var value = $(this).val();
    var domain = value.substr(value.indexOf("@") + 1);
    var tld = domain.split(".").pop();

    if (tld.length > 1) {
        $(".alert-box-login").hide();
    }
    console.log("#auth-email-login");
});

$("#auth-pass-login").on('keyup change', function () {
    console.log("#auth-pass-login");
    if ($(this).val().length >= 6) {
        $(".alert-box-login").hide();
    }
});



//$.validator.addMethod("noSpace", function (value, element) {
//    return this.optional(element) || /.*\S+.*/.test(value);
//}, "No se permite introducir espacios en blanco");

//$.validator.methods.email = function (value, element) {
//    return this.optional(element) || /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/.test(value);
//}

//var validator = $("#loginForm").validate({
//    rules: {
//        auth_email_login: {
//            required: true,
//            email: true,
//            noSpace: true
//        },
//        auth_pass_login: {
//            noSpace: true,
//            required: true,
//            minlength: 6
//        },
//    },
//    messages: {
//        auth_email_login: {
//            auth_email_login: "Introduzca un correo electrÃ³nico vÃ¡lido",
//            required: "El campo Correo electrÃ³nico es requerido"
//        },
//        auth_pass_login: {
//            required: "El campo ContraseÃ±a es requerido"
//        }
//    },
//    errorPlacement: function (error, element) {
//        $(".alert-box-login span").html("");
//        error.appendTo($(".alert-box-login").show().children("span"));
//    }

//});


function emailLogIn() {
    //logoutAuth();
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });

    let authEmail = $("#auth-email-login").val();
    let authPass = $("#auth-pass-login").val();

    firebaseLogIn(authEmail, authPass);

    return;
}

$("#loginForm").submit(function (event) {
    if ($("#loginForm").valid()) {

        emailLogIn();
        $(this).children(".sbr_btn").html("<img src='//assets.diariolibre.com/img/midl/loading.gif'>").attr("disabled", 'disabled');
    }
    event.preventDefault();
});

$('.sbr_input').keypress(function (e) {
    if (e.which == 13 && $("#auth-email").val() != '') {
        emailLogIn();
        e.preventDefault();
    }

});

$("#auth-email-login").keydown(function (e) {
    if (e.keyCode == 32) {
        $(this).val($(this).val() + "");
        return false;
    }
});

function signOut() {
    logoutAuth();
    location.reload(true);
}

$(".sbrLoginCont").on("click", ".overlayForm .logout", function () {
    logoutAuth();
    location.reload(true);
});

function loadUserData(token) {

    let user = firebase.auth().currentUser;
    let providerId = user.providerData[0].providerId;

    if (!token) {
        console.log("nada");
        return;
    } else {
        var settings = {
            "url": BASE_URI + "/accounts?",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": token
            },
        };

        $.ajax(settings).done(function (response) {

            //let fn = `${authName} ${authSurname}`;
            //new_user ? sendingEmails(fn,authEmail) : null;

            if (response.hasOwnProperty('data')) {
                switch (providerId) {
                    case "facebook.com":
                        gtag('event', 'midl_login', {
                            'event_category': 'login',
                            'event_label': 'facebook'
                        });

                        break;
                    case "google.com":
                        gtag('event', 'midl_login', {
                            'event_category': 'login',
                            'event_label': 'google'
                        });

                        break;
                    case "password":
                        gtag('event', 'midl_login', {
                            'event_category': 'login',
                            'event_label': 'email'
                        });
                        break;
                }
            } else {
                switch (providerId) {
                    case "facebook.com":
                        gtag('event', 'midl_login', {
                            'event_category': 'login',
                            'event_label': 'facebook'
                        });
                        gtag('event', 'midl_registro', {
                            'event_category': 'registro',
                            'event_label': 'facebook'
                        });

                        break;
                    case "google.com":
                        gtag('event', 'midl_login', {
                            'event_category': 'login',
                            'event_label': 'google'
                        });
                        gtag('event', 'midl_registro', {
                            'event_category': 'registro',
                            'event_label': 'google'
                        });

                        break;
                    case "password":
                        gtag('event', 'midl_registro', {
                            'event_category': 'registro',
                            'event_label': 'email'
                        });

                        break;
                }
            }
            if (response.hasOwnProperty('data') && response.data.hasOwnProperty("show_guide")) {
                window.localStorage.setItem('miDL_user', JSON.stringify(response.data.show_guide));
                localStorage.setItem("imgAvatarUserMIDL", response.data.avatar);
            }


            updateBcProfile(token, true, useremail);

            if (!response.hasOwnProperty('data')) {
                showModalUserLogin();
                return false;
            }

            let maxage = 60 * 60 * 24 * 365;
            document.cookie = "_MIDL=true;path=/;max-age=" + maxage;

            if (window.location.pathname != "/mi-dl" && !IsDetailPage && !IsDetailPageTopic) {
                window.location.replace("/mi-dl")
            } else if (!IsDetailPage && !IsDetailPageTopic) {
                displayName(response.data, token);
            } else if (IsDetailPage || IsDetailPageTopic) {
                closeModal();
                if (IsDetailPage) {
                    saveNoteMiDL();
                } else {
                    addTopic(topicId, true);
                }
            }

        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(jqXHR);
            console.log(errorThrown);
        });
    }
}



firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        $("#amiDlbtn").attr("href", "/mi-dl");
        $("#miDlbtn").removeAttr("onclick");
        $("#miDlbtn").empty();
        var img = localStorage.getItem("imgAvatarUserMIDL") == null ? getAvatar() : localStorage.getItem("imgAvatarUserMIDL");
        $("#imgUser").attr("src", img);
        $("#imgUserHeader").attr("src", img);
        if (window.mobileCheck()) {
            $("#btn-login").append("<img src=" + img + " class='ml-2 mt-2 h-8 w-8 rounded-full' />");
            $("#btn-login").attr("onclick", "goMiDL()")
        }

        $("#miDlbtn").append('<img src="' + img + '" alt="' + user.name + '" width="24" height="24" class="inline w-5 h-5 object-cover rounded-full"><span class="font-bold text-md"> MiDL</span>');
        user.getIdToken().then(function (token) {
            if (loginNow || window.location.pathname == "/mi-dl") {

                let providerId = user.providerData[0].providerId;

                switch (providerId) {
                    case "facebook.com":
                        loadUserData(token);
                        break;
                    case "google.com":
                        loadUserData(token);
                        break;
                    case "password":
                        if (window.location.pathname != "/mi-dl" && !isLogin)
                            updateExtraData(token);
                        else
                            loadUserData(token);
                        break;
                }
            }
            if ($("#UrlNota").length > 0) {
                userExtraTopics(token);
            }
        });
    } else {
        if (window.location.pathname == "/mi-dl") {
            window.location.href = "/";
        } else {
            var qString = findGetParameter("login")
            if (qString == "1") {
                showLoginModal();
            }
        }
    }
});


function goMiDL() {
    window.location.href = "/mi-dl";

}

function showLoginModal() {
    $(".filter-sidenav").show();
    $("#login-modal").parents('.modal-background').show();
}

function closeModal() {
    if ($("#update-container").css("display") == "none") {
        $(".filter-sidenav").hide();
        $('.modal-background').hide();
    }
}

function loadNewsLetters(token, other = null) {

    $.ajax(
        {
            async: true,
            cache: false,
            url: BASE_URI + "/subscribe/lists",
            type: "GET",
            timeout: 0,

            processData: true,

        }
    ).done(function (response) {

        $("#nbItemsNewsletter .lds-topics").show();
        var els = 0;
        $.each(response.data, function (key, value) {

            if (other != null) {
                var found = $.map(other.data, function (val) {
                    return val.list_id == value.id ? val.list_id : null;
                });

                if (found[0] != value.id) {
                    $("#newsletternotificaciones").append(
                        createNewsletterHtml(value, "add", "Suscribir")
                    );

                } else {
                    $("#newsletternotificaciones").append(
                        createNewsletterHtml(value, "check", "Suscrito")
                    );
                }
            } else {
                $("#newsletternotificaciones").append(
                    createNewsletterHtml(value, "add", "Suscribir")
                );

            }

        });

    }).fail(function (jqXHR, textStatus) {

    });
}

function newsletterClick(id) {
    var list = id;
    var id = "#" + list;
    var email = firebase.auth().currentUser.email;

    if (!$(id).prop("checked")) {
        subscribePush(email, list, $(id));
    } else {
        removeNewsLetterSuscription(list, email, $(id));
    }
}

function notificationClick(id) {
    var list = id;
    var id = "#" + list;
    var email = firebase.auth().currentUser.email;

    if (!$(id).prop("checked")) {
        addNotification($(id).data("title"), $(id).data("title"));
    } else {
        removeNewsLetterSuscription($(id).data("title"));
    }
}

function addNotification(title, tag_name) {
    var user = firebase.auth().currentUser;

    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        OneSignal.getUserId(function (userId) {
            user.getIdToken().then(function (token) {
                $.ajax({
                    async: true,
                    url: BASE_URI + "/notifications",
                    type: "POST",
                    timeout: 0,
                    cache: false,
                    data: {
                        tag_name: tag_name,
                        title: title,
                        player_id: userId,
                        app_id: app_id
                    },
                    headers: {
                        "Authorization": token,
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).done(function (response) {



                    gtag('event', 'midl_notificaciones', {
                        'event_category': 'push',
                        'event_label': tag_name + '_suscrito'
                    });


                }).fail(function (jqXHR, textStatus, errorThrown) {



                });
            });
        });
    } else if (Notification.permission !== 'denied' || Notification.permission === "default") {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("Hey aqui va el mensaje luego de facilitar el permiso!");
            }
        });
    }
}

function removeNotification(tag_name) {
    var user = firebase.auth().currentUser;

    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {

        OneSignal.getUserId(function (userId) {
            user.getIdToken().then(function (token) {
                $.ajax({
                    async: true,
                    url: BASE_URI + "/notifications",
                    type: "DELETE",
                    timeout: 0,
                    cache: false,
                    data: {
                        tag_name: tag_name,
                        player_id: userId,
                        app_id: app_id
                    },
                    headers: {
                        "Authorization": token,
                        "Content-Type": "application/x-www-form-urlencoded"

                    }
                }).done(function (response) {

                    gtag('event', 'midl_notificaciones', {
                        'event_category': 'push',
                        'event_label': tag_name + '_cancelado'
                    });
                }).fail(function (jqXHR, textStatus, errorThrown) {



                });
            });
        });
    } else if (Notification.permission !== 'denied' || Notification.permission === "default") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {

            }
        });
    }
}

function createNewsletterHtml(data, icon = "add", text = "Suscribir") {
    var active = '';
    var id = '';
    if (icon == 'check') {
        active = 'active';
    }

    if (data.slug) {
        id = data.slug
    } else {
        id = data.id;
    }
    var value = text == "Suscrito" ? "checked" : "";
    var html = `
                <div class="w-full sm:w-6/12 md:w-4/12 flex flex-wrap mb-2 px-3">
                    <div class="w-2/12" >
                            <div class="switch float-right mr-3 switch-newsletter">
                                    <input id="${id}" type="checkbox" class="switch-input" ${value} data-title="${data.name}">
                                    <label for="${id}"  class="switch-label" onclick="newsletterClick('${id}')">Switch</label>
                            </div>
                    </div>
                    <div class="w-10/12">
                            <h3 class="text-lg mb-1">${data.name}</h3>
                            <span class=" text-md font-bold mb-2 block">
                                <em></em>
                            </span>
                            <p class="text-md"></p>
                    </div>
                </div>
        `;
    return html;
}

function loadMyNewsLetters(token) {

    $.ajax(
        {
            async: true,
            cache: false,
            url: BASE_URI + "/newsletter",
            type: "GET",
            timeout: 0,
            processData: true,
            headers: {

                "Authorization": token
            }

        }
    ).done(function (response) {

        setTimeout(loadNewsLetters(token, response), 15000);


    }).fail(function (jqXHR, textStatus, errorThrown) {

    });
}

function loadMyNotifications(token) {

    $.ajax(
        {
            async: true,
            cache: false,
            url: BASE_URI + "/notifications",
            type: "GET",
            timeout: 0,
            processData: true,
            headers: {

                "Authorization": token
            }

        }
    ).done(function (response) {

        setTimeout(loadNotifications(token, response), 15000);


    }).fail(function (jqXHR, textStatus, errorThrown) {

    });
}

function loadNotifications(token, other = null) {

    $.ajax(
        {
            async: true,
            cache: false,
            url: BASE_URI + "/notifications/categories/list",
            type: "GET",
            timeout: 0,

            processData: true,

        }
    ).done(function (response) {


        var els = 0;
        response.data.sort(function (a, b) {
            return a["orden"] - b["orden"];
        });
        $.each(response.data, function (key, value) {

            if (other != null) {
                var found = $.map(other.data, function (val) {
                    return val.slug == value.slug ? val.slug : null;
                });

                if (found[0] != value.slug) {
                    $("#notificationsitems").append(
                        createNotificationHtml(value, "add", "Suscribir")
                    );

                } else {
                    $("#notificationsitems").append(
                        createNotificationHtml(value, "check", "Suscrito")
                    );
                }
            } else {
                $("#notificationsitems").append(
                    createNotificationHtml(value, "add", "Suscribir")
                );

            }

        });

    }).fail(function (jqXHR, textStatus) {

    });
}

function sort_newsletter(a, b) {
    return ($(b).data('order')) < ($(a).data('order')) ? 1 : -1;
}


function createNotificationHtml(data, icon = "add", text = "Suscribir") {
    var active = '';
    var id = '';
    if (icon == 'check') {
        active = 'active';
    }

    if (data.slug) {
        id = data.slug
    } else {
        id = data.id;
    }
    var value = text == "Suscrito" ? "checked" : "";
    var html = `
                <div class="inline-block mb-8 px-3">
                    <div class="switch mr-2" >
                                    <input id="${id}" type="checkbox" class="switch-input" ${value} data-title="${data.name}">
                                    <label for="${id}"  class="switch-label" onclick="notificationClick('${id}')">Switch</label>
                    </div>
                      <span class="text-lg font-bold">${data.name}</span>
                </div>

        `;
    return html;
}

function loadMyTopics(token) {

    $.ajax(
        {
            async: true,
            cache: false,
            url: BASE_URI + "/topics",
            type: "GET",
            timeout: 0,
            processData: true,
            headers: {

                "Authorization": token
            }

        }
    ).done(function (response) {


        if (response) {
            var itemsSlides = "";
            var cont = 0;
            $.each(response.data, function (key, value) {

                $("#personalTopics").append(
                    createPersonalTopicsHtml(value)
                );

                $("#verMispersonalTopics").append(
                    createVerPersonalTopicsHtml(value.topic_name, value.title)
                );

                if (cont < 5) {
                    $("#personal" + value.topic_name).addClass("showmistopics");
                    var slide = searchTopics(value.title, value.topic_name);
                    itemsSlides += slide;
                    if (slide.length > 0) {
                        var itemCheck = "#verMistopicos" + value.topic_name;
                        $(itemCheck).parents("div.inline-block").remove();
                        cont++;
                    }
                }

            });

            $("#mistopicos").replaceWith(itemsSlides);


            renderCarrusel();
            $(".resultadosSpinner").remove();
            $(".arrow").removeClass("slick-hidden");
        }

        setTimeout(loadTopicsSuggest(token, response), 15000);


    }).fail(function (jqXHR, textStatus, errorThrown) {

    });
}

function getVerMas() {
    return `<div class="w-full py-4" id="verMas"><div class="mb-6 mx-auto btn-general" style="cursor:pointer;" onclick="showTopic()">Ver más</div></div>`;
}

function showTopic() {
    var entro = false;
    $("#verMas .btn-general").before('<div class="resultadosSpinner" style="margin: auto; "><img alt="Cargando" src="https://diariolibre.blob.core.windows.net/images/Circulo-Carga-62157.gif" style="display:block;margin:auto;width:7%;"></div>');
    $("[id^='personal']:not(.showmistopics)").each(function (index) {
        if (index > 0 && !entro) {
            $(this).addClass("showmistopics");
            var item = searchTopics($(this).data("title"), $(this).data("topic"));
            if (item.length > 0) {
                entro = true;
                $("[id^='verMas']").append(item + getVerMas());
                return true;
            }
        }
    });
    if (!entro) {
        $("[id^='verMas']").remove();
    }
}

function removeTopicList(paramtopic, topicId) {
    var headTopic = "#head-" + topicId;
    var slideTopic = "#slide-" + topicId;
    var personalTopic = "#verMistopicos" + topicId;
    $("#verMispersonalTopics").append(
        createVerPersonalTopicsHtml(topicId, paramtopic)
    );
    $(slideTopic).empty();
    $(headTopic).remove();
    $(slideTopic).removeAttr("id");
}



function searchTopics(paramtopic, topicId) {
    var slides = SearchTopicsBD(1, paramtopic, topicId);
    var topic = "";
    var slide = "";
    if (slides.length > 0) {
        var topic = `
            <div class="w-full px-4 mb-6" id="head-${topicId}">
                <div class="inline-block text-dl">
                    <h3 class="roboto text-lg sm:text-lg uppercase inline mr-3">${paramtopic}</h3>
                    <label class="box-checkbox little mr-2 mb-0 inline">
                        <input onclick="removeTopicList('${paramtopic}', '${topicId}');" type="checkbox" data-value="${topicId}" checked="checked">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
     `;

        var slide = `
        <div class="w-full px-2 sm:px-1 pb-8 relative mistopicositems" id="slide-${topicId}">
            ${slides}
            <div class="arrow prev">
                <img src="https://diariolibre.blob.core.windows.net/images/left.svg" alt="anterior" width="14" height="14">
            </div>
            <div class="arrow next">
                <img src="https://diariolibre.blob.core.windows.net/images/right.svg" alt="siguiente" width="14" height="14">
            </div>
            <div class="w-full px-2 sm:px-3 mb-6">
                <hr>
            </div>
        </div>
    `
    }

    return topic + slide;
}

var IsDetailPageTopic = false;
var topicId = "";
function addTopic(id, IsNota) {
    var title = $(id).data("title");
    var topic = $(id).data("topic")
    var uuid = $(id).data("uid");
    topicId = id;
    var user = firebase.auth().currentUser;


    if (user == null) {
        IsDetailPageTopic = true;
        showLoginModal();

        return true;
    }
    topicId = "";
    IsDetailPageTopic = false;
    addTopicBD($(id).data("title"), $(id).data("topic"));
    if (!IsNota) {
        $("#personalTopics").append(
            createPersonalTopicsHtml({ title: title, topic_name: topic, uid: uuid })
        );
        $(id).parents("div.inline-block").remove();
    } else {
        var idOri = id;
        var idrem = idOri.replace("topicPrin", "topicPrinRem");


        var idtopicAdd = "";
        var idtopicRem = "";

        if (id.indexOf("topicPrin") > 0) {
            idtopicAdd = idOri.replace("topicPrin", "topicTag");
            idtopicRem = idOri.replace("topicPrin", "topicTagRem");
        } else {
            idrem = idOri.replace("topicTag", "topicPrinRem");
            id = idOri.replace("topicTag", "topicPrin");
            idtopicAdd = idOri.replace("topicTag", "topicTag");
            idtopicRem = idOri.replace("topicTag", "topicTagRem");
        }

        $(id).css("display", "none");
        $(idrem).css("display", "block");

        $(idtopicAdd).css("display", "none");
        $(idtopicRem).css("display", "block");
    }
}

function removeTopicNota(id) {
    delTopic($(id).data("topic"));
    var idOri = id;

    var idAdd = idOri.replace("topicPrinRem", "topicPrin");

    var idtopicAdd = "";
    var idtopicRem = "";


    if (id.indexOf("topicPrin") > 0) {
        idtopicAdd = idOri.replace("topicPrinRem", "topicTag");
        idtopicRem = idOri.replace("topicPrinRem", "topicTagRem");
    } else {
        idAdd = idOri.replace("topicTagRem", "topicPrin");
        id = idOri.replace("topicTagRem", "topicPrinRem");
        idtopicAdd = idOri.replace("topicTagRem", "topicTag");
        idtopicRem = idOri.replace("topicTagRem", "topicTagRem");
    }

    $(idAdd).css("display", "block");
    $(id).css("display", "none");

    $(idtopicAdd).css("display", "block");
    $(idtopicRem).css("display", "none");
}


function removeTopic(id) {
    var title = $(id).data("title");
    var topic = $(id).data("topic")
    var uuid = $(id).data("uid");
    delTopic($(id).data("topic"));
    $(id).parents("div.inline-block").remove();
    var headTopic = "#head-" + id.replace("#personal", "");
    var slideTopic = "#slide-" + id.replace("#personal", "");
    var personalTopics = "#verMistopicos" + id.replace("#personal", "");
    $(headTopic).remove();
    $(slideTopic).remove();
    $(personalTopics).parents("div.inline-block").remove();
}

function loadTopicsSuggest(token, other = null) {

    //$.ajax(
    //    {
    //        async: true,
    //        cache: false,
    //        url: BASE_URI + "/topics/suggested",
    //        type: "GET",
    //        timeout: 0,
    //        processData: true,
    //        headers: {
    //            "Authorization": token
    //        }
    //    }
    //).done(function (response) {

    //    $.each(response.data, function (key, value) {

    //        if (other != null) {
    //            var found = $.map(other.data, function (val) {
    //                return val.topic_name == value.topic_name ? val.topic_name : null;
    //            });
    //            if (found[0] != value.topic_name) {
    //                $("#topicsSuggest").append(
    //                    createTopicsHtml(value)
    //                );
    //            }
    //        } else {
    //            $("#topicsSuggest").append(
    //                createTopicsHtml(value)
    //            );
    //        }
    //    });

    //}).fail(function (jqXHR, textStatus) {

    //});
}


function createTopicsHtml(data) {
    var html = `
                <div class="inline-block mb-4 px-3">
                    <label class="box-checkbox mr-2 inline">
                        <input id="topic${data.topic_name}" type="checkbox"  data-title="${data.title}" data-topic="${data.topic_name}" data-uid="${data.uid}">
                        <span class="checkmark" onclick="addTopic('#topic${data.topic_name}')"></span>
                    </label>
                    <span class="text-lg font-bold inline">${data.title}</span>
                </div>
        `;
    return html;
}

function createPersonalTopicsHtml(data) {
    var html = `
                <div class="inline-block mb-4 px-3">
                    <label class="box-checkbox mr-2 inline">
                        <input id="personal${data.topic_name}" type="checkbox" checked data-title="${data.title}" data-topic="${data.topic_name}" data-uid="${data.uid}">
                        <span class="checkmark" onclick="removeTopic('#personal${data.topic_name}')"></span>
                    </label>
                    <span class="text-lg font-bold inline">${data.title}</span>
                </div>
        `;
    return html;
}

function createVerPersonalTopicsHtml(topic_name, title) {
    var html = `
                <div class="inline-block mb-4 px-3">
                    <label class="box-checkbox mr-2 inline">
                        <input id="verMistopicos${topic_name}" type="checkbox" data-title="${title}" data-topic="${topic_name}">
                        <span class="checkmark" onclick="addTopicList('${title}','${topic_name}')"></span>
                    </label>
                    <span class="text-lg font-bold inline">${title}</span>
                </div>
        `;
    return html;
}

function addTopicList(title, topic_name) {
    var slide = searchTopics(title, topic_name);
    if (slide.length > 0) {
        $(".mistopicositems:last").after(slide);
        renderCarruselItem("#slideitem-" + topic_name);
        var inCheck = "#verMistopicos" + topic_name;
        $(inCheck).parents("div.inline-block").remove();
        $(".arrow").removeClass("slick-hidden");
    }
}

function addTopicBD(title, topic) {

    var user = firebase.auth().currentUser;



    user.getIdToken().then(function (token) {

        $.ajax({
            type: "POST",
            url: BASE_URI + "/topics",
            data: { title: title, topic_name: topic },
            headers: {

                "Authorization": token
            }
        })
            .done(function (data) {

                gtag('event', 'midl_topics', {
                    'event_category': 'topics',
                    'event_label': topic + '_suscrito'
                });

            })
            .fail(function (jqXHR, textStatus, errorThrown) {


            });
    });
}

function delTopic(topic) {

    var user = firebase.auth().currentUser;
    user.getIdToken().then(function (token) {

        $.ajax({
            type: "DELETE",
            url: BASE_URI + "/topics",
            data: { topic_name: topic },
            headers: {

                "Authorization": token
            }
        })
            .done(function (data) {

                gtag('event', 'midl_topics', {
                    'event_category': 'topics',
                    'event_label': topic + '_delete'
                });

            })
            .fail(function (jqXHR, textStatus, errorThrown) {


            });
    });
}

function saveNoteMiDL() {
    addFavorites();
}

function removerNotaMiDL(elem, id) {
    $(elem).parents("div.notas-guardadas").remove();
    delFavorite(id);
}

function removeFavorite() {
    delFavorite(dataNota.news_id);
}

function delFavorite(id) {

    var user = firebase.auth().currentUser;

    if (!user) {
        showLoginModal();
        return;
    } else {

        user.getIdToken().then(function (token) {

            $.ajax({
                async: true,
                url: BASE_URI + "/favorites",
                method: "DELETE",
                timeout: 0,
                cache: false,
                data: {
                    news_id: id
                },
                headers: {
                    Authorization: token
                }
            }).done(function (response) {

                if (window.location.pathname != "/mi-dl") {
                    var img = $("#notaFavoritaSave").attr("src");
                    $("#notaFavoritaSave").attr("src", img.replace("fav-midl", "fav-midl-gray"));
                    $("#notaFavoritaSave").attr("onclick", "saveNoteMiDL()");
                }
                gtag('event', 'midl_notas_favoritas', {
                    'event_category': 'favoritas',
                    'event_label': 'eliminado'
                });

            }).fail(function (jqXHR, textStatus) {

                console.log(jqXHR);

            });
        });
    }

}

function addFavorites() {

    var user = firebase.auth().currentUser;

    if (user == null) {
        IsDetailPage = true;
        showLoginModal();

        return false;
    }

    user.getIdToken().then(function (token) {

        $.ajax({

            type: "POST",
            cache: false,
            async: true,
            url: BASE_URI + "/favorites",

            data: {
                "news_id": dataNota.news_id,
                "url": dataNota.url,
                "imagen": dataNota.image,
                "title": dataNota.title,
                "topic_name": dataNota.topic_name,
                "topic_title": dataNota.topic_title
            },
            headers: {
                Authorization: token,
            }

        }).done(function (response) {
            var img = $("#notaFavoritaSave").attr("src");
            $("#notaFavoritaSave").attr("src", img.replace("fav-midl-gray", "fav-midl"))
            $("#notaFavoritaSave").attr("onclick", "removeFavorite()");
        }).fail(function (jqXHR, textStatus) {

            console.log(jqXHR);

        });
    });
}


function userExtraTopics(token) {
    var settings = {
        "async": true,
        "url": BASE_URI + "/details/status/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    };
    $.ajax(settings).done(function (response) {

        $.each(response.topics, function (key, value) {

            $("#topicPrin" + value.topic_name).css("display", "none");
            $("#topicPrinRem" + value.topic_name).css("display", "block");

            $("#topicTag" + value.topic_name).css("display", "none");
            $("#topicTagRem" + value.topic_name).css("display", "block");

        });


    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    });
    settings.url = BASE_URI + "/favorites?offset=0"
    settings.method = "GET";
    $.ajax(settings).done(function (response) {

        if (response) {
            $.each(response.data, function (key, value) {
                if (window.location.pathname != "/mi-dl") {
                    if (value.news_id == dataNota.news_id) {
                        var img = $("#notaFavoritaSave").attr("src");
                        $("#notaFavoritaSave").attr("src", img.replace("fav-midl-gray", "fav-midl"))
                        $("#notaFavoritaSave").attr("onclick", "removeFavorite()")

                    }
                }
                if (window.location.pathname == "/mi-dl") {
                    $("#misnotasMiDL").append(`
                            <div class="w-full notas-guardadas">
                            <article class="flex flex-wrap -mx-2 sm:-mx-3 border-b pb-4 mb-4">
                                <div class="w-5/12 xl:w-3/12 sm:w-4/12 px-2 sm:px-3">
                                    <a href="${value.url}">
                                        <img src="${value.imagen}" width="546" height="350" alt='${value.title}' class="sm:h-36 md:h-48 lg:h-40 xl:h-44 object-cover lazy"></a>
                                </div>
                                <div class="w-7/12 xl:w-9/12 sm:w-8/12 px-2 sm:px-3">
                                    <div class="text-md mb-2 meta">
                                        <a href="${value.url}">${value.topic_title}</a>
                                    </div>
                                    <h3 class="text-md sm:text-lg mb-1 sm:mb-3">
                                        <a href="${value.url}">${value.title}</a></h3>
                                    <span class="text-sm sm:text-md uppercase inline-block cursor-pointer hover:opacity-50" onclick="removerNotaMiDL(this, '${value.news_id}');">
                                        <img src="https://diariolibre.blob.core.windows.net/images/bookmark.svg" alt="Eliminar nota" width="18" height="18" class="delete-article mr-1 inline">
                                        Eliminar marcador
                                    </span>
                                </div>
                            </article>
                        </div>
                        `)
                }

            });
            if (response.data.length == 0) {
                $("#misnotasMiDL").append("<span>Por el momento no cuentas con notas guardadas.</span>");
            }
        }

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    });
}


function subscribePush(email, list, el) {

    var user = firebase.auth().currentUser;
    let nl = el.data("title").split(' ').join('-').toLowerCase();
    user.getIdToken().then(function (token) {

        $.ajax({
            type: "POST",
            url: BASE_URI + "/newsletter",
            data: { email: email, list_id: list },
            headers: {

                "Authorization": token
            }
        })
            .done(function (data) {

                gtag('event', 'midl_newsletters', {
                    'event_category': 'newsletters',
                    'event_label': nl + '_suscrito'
                });

            })
            .fail(function (jqXHR, textStatus, errorThrown) {


            });
    });
}

function removeNewsLetterSuscription(list, email, el) {

    let nl = el.data("title").split(' ').join('-').toLowerCase();
    var user = firebase.auth().currentUser;

    user.getIdToken().then(function (token) {

        $.ajax({
            async: true,
            url: BASE_URI + "/newsletter",
            type: "DELETE",
            timeout: 0,
            cache: false,
            data: {
                list_id: list,
                email: email
            },
            headers: {

                "Authorization": token,
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }).done(function (response) {



            gtag('event', 'midl_newsletters', {
                'event_category': 'newsletters',
                'event_label': nl + '_cancelado'
            });


        }).fail(function (jqXHR, textStatus, errorThrown) {



        });
    });
}


$(".modal-background").click(function (e) {

    var container = $(".modal-container");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("#update-container").css("display") == "none") {
            $(".filter-sidenav").hide();
            $(".modal-background").hide();
        }
    }

});

function showLogin() {
    $("#login-container").show();
    $("#register-container").hide();
    $("#recover-container").hide();
}

function showRegister() {
    $("#login-container").hide();
    $("#register-container").show();
    $("#recover-container").hide();
}

function showRecover() {
    $("#login-container").hide();
    $("#register-container").hide();
    $("#recover-container").show();
}

function returnMessages(code) {
    switch (code) {
        case "auth/provider-already-linked":
            errorMsg = "Estas credenciales ya están enlazadas.";
            return errorMsg;
            break;
        case "auth/invalid-credential":
            errorMsg = "Credenciales inválidas.";
            return errorMsg;
            break;
        case "auth/credential-already-in-use":
            errorMsg = "Estas credenciales ya están registradas.";
            return errorMsg;
            break;
        case "auth/email-already-in-use":
            errorMsg = "Este correo ya está registrado.";
            return errorMsg;
            break;
        case "auth/operation-not-allowed":
            errorMsg = "Esta operación no está permitida.";
            return errorMsg;
            break;
        case "auth/invalid-email":
            errorMsg = "El correo está incorrecto.";
            return errorMsg;
            break;
        case "auth/wrong-password":
            errorMsg = "Contraseña inválida.";
            return errorMsg;
            break;
        case "auth/invalid-verification-code":
            errorMsg = "Código de verificación inválido.";
            return errorMsg;
            break;
        case "auth/user-not-found":
            errorMsg = "No hay registro con estas credenciales. Favor tomar en cuenta que cuando te registras con una red social, no estás creando una contraseña.";
            return errorMsg;
            break;
        case "auth/weak-password":
            errorMsg = "Contraseña muy débil.";
            return errorMsg;
            break;
        case "auth/too-many-requests":
            errorMsg = "Demasiados intentos fallidos. Inténtelo más tarde.";
            return errorMsg;
            break;
        case "auth/invalid-action-code":
            errorMsg = "El código de acción es inválido. Esto puede suceder si el código está mal formado, expirado o ya ha sido usado";
            return errorMsg;
            break;
        case "auth/expired-action-code":
            errorMsg = "El código de acción ha expirado.";
            return errorMsg;
            break;
        case "auth/network-request-failed":
            errorMsg = "Se ha producido un error de red (como tiempo de espera, conexión interrumpida o host inaccesible).";
            return errorMsg;
            break;
        case "auth/requires-recent-login":
            errorMsg = "Esta operación es sensible y requiere una reciente autenticación. Inicie sesión nuevamente antes de volver a intentar.";
            return errorMsg;
            break;
        default:
            errorMsg = "Lo sentimos, ha ocurrido un error." + " - " + error;
            return errorMsg;
    }
}


function displayName(data, token) {

    let ls = JSON.parse(window.localStorage.getItem('miDL_user')), fn, usr;

    if (ls !== null) {
        if (typeof ls.fullName !== "undefined" && ls.fullName.trim() !== "") {
            usr = ls.fullName;
        } else {
            usr = '';
        }
        $("#userName").text(usr);

        if (data) {
            $("#contacto_nombre").val(data.name);
            $("#contacto_apellido").val(data.last_name);
            $("#contacto_genero").val(data.gender);
            $("#datepicker").val(data.birth_day);
            $("#contacto_pais").val(data.country);
            $("#contacto_correo").val(data.email);
        }

        if (token) {
            loadMyNewsLetters(token);
            loadMyNotifications(token);
            loadMyTopics(token);
            userExtraTopics(token);
        }

        if (ls.miDL === false) {
            //startIntro(fn);
        }

        if (usr == "") {
            showModalUserLogin();
        }

    } else {
        showModalUserLogin();
    }
}



function handleResetPassword(actionCode, continueUrl, lang) {

    var accountEmail;

    firebase.auth().verifyPasswordResetCode(actionCode).then(function (email) {
        var accountEmail = email;
        newPassword = $("#new_password").val()


        firebase.auth().confirmPasswordReset(actionCode, newPassword).then(function (resp) {
            $("#passRegistro").css("display", "block");
            $("#passRegistro span").text("Contraseña guardada con éxito");
            $("#update-passwordload").css("display", "none");
        }).catch(function (error) {
            var errorCode = error.code;
            var values = returnMessages(errorCode)
            $("#passRegistro span").text(values);
            $("#passRegistro").css("display", "block");
            $("#update-passwordload").css("display", "none");
        });

    }).catch(function (error) {
        var errorCode = error.code;
        var values = returnMessages(errorCode)
        $("#passRegistro").css("display", "block");
        $("#passRegistro span").text(values);
        $("#update-passwordload").css("display", "none");
    });
}

if (window.location.pathname == "validation") {
    var code = findGetParameter("mode");
    if (code != "resetPassword") {
        window.location.href = "/";
    }
}


function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function showModalUserLogin() {
    showLoginModal();
    $("#login-container").css("display", "none");
    $("#register-container").css("display", "none");
    $("#update-container").css("display", "block");
    $(".modal-background").css("background", "#00000073");
}

function showModalnewPassword() {
    showLoginModal();
    $("#login-container").css("display", "none");
    $("#register-container").css("display", "none");
    $("#update-container").css("display", "none");
    $("#update-password-container").css("display", "block");
    $(".modal-background").css("background", "#00000073");
}


var domain = window.location.host == "localhost" ? "http://localhost/diariolibre" : ""

function SearchTopicsBD(page, strTag, topicId) {
    var order = "";
    var orderby = "creationdate desc";
    var orderbytype = "";
    order = orderby + ' ' + orderbytype;
    var rnd = Math.floor(Math.random() * 1000);
    var items = "";;
    $.ajax({
        async: false,
        type: "POST",
        url: domain + "/funcionalidades/search/index.aspx/search?t=" + rnd,
        data: "{'excludeIds':'','q': '*','page': '" + page + "', 'top':'10','orderby':'creationdate desc', 'anio': '', 'tags': '" + strTag + "', 'Autor':'', 'seccion':'', 'subseccion': '', 'columnista': '' }",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.d.Results.length > 0) {
                items = ` <div class="topic-slider" id="slideitem-${topicId}">`
                var data = msg.d.Results;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Document.Status != 0 && data[i].Document.WorkFlow != 0) {
                        items += getItemsTopic(data[i].Document);
                    }
                }
                items += "</div>";
            }
        }
    });
    return items;
};

function getItemsTopic(data) {

    var url = getFechaurl2(data.Creationdate) + "/" + data.Parent2tag + "/" + data.Parent1tag + "/" + slugify2(data.field1 ?? data.Title) + "/" + data.Id;

    var imagefull = data.Imagen
    var imagenew;
    if (imagefull != null && imagefull != undefined && imagefull != "") {
        imagefull = imagefull.replace("https://diariolibre.blob.core.windows.net/images/", "/");
        imagefull = imagefull.replace("/images/", "/")
        imagenew = "https://resources.diariolibre.com/images" + imagefull;
    } else {
        imagenew = "https://diariolibre.blob.core.windows.net/images/dummy_diariolibre.jpg"
    }
    var item = `
                   
                        <div class="px-2 sm:px-3 mb-4">
                            <article>
                                <a href="${url}">
                                    <img src="${imagenew}" width="546" height="350" alt='${data.Title}' class="sm:h-28 md:h-32 lg:h-32 xl:h-36 w-full object-cover lazy mb-3"></a>
                                <div class="text-md mb-2 meta">
                                    <a href="/${data.Parent2tag}"> ${data.Parent2tag}</a>
                                </div>
                                <h3 class="text-md xl:text-lg mb-3">
                                    <a href="${url}">${data.Title}</a
                                </h3>
                            </article>
                        </div>
                    
                `;
    return item;

}

function getFechaurl2(date) {
    var fecha = new Date(date.replace(" +00:00", ""));
    return "/" + fecha.getFullYear() + "/" + (fecha.getMonth() < 10 ? "0" + fecha.getMonth().toString() : fecha.getMonth()) + "/" + (fecha.getDay() < 10 ? "0" + fecha.getDay().toString() : fecha.getDay());
}

function dateHour2(date) {
    var fecha = new Date(date.replace(" +00:00", ""));
    return (fecha.getHours() < 10 ? "0" + fecha.getHours().toString() : fecha.getHours()) + ":" + (fecha.getMinutes() < 10 ? "0" + fecha.getMinutes().toString() : fecha.getMinutes()) + " " + (fecha.getHours() < 12 ? "A.M." : "P.M.");
}

function datedym2(date) {
    var fecha = new Date(date.replace(" +00:00", ""));
    return getstrMonth(fecha.getMonth()) + " " + fecha.getDate() + ", " + fecha.getFullYear();
}

function getstrMonth2(month) {
    return ["Enero", "Febro", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][month];
}


function slugify2(text) {
    text = removeAccents2(text);

    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

const removeAccents2 = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderCarruselItem(name) {
    var slick = $(name).slick({
        lazyload: 'ondemand',
        infinite: true,
        slidesToShow: 5,
        dots: false,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1438,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.next').on('click', function (e) {
        slick.slick("slickNext");
    });

    $('.prev').on('click', function (e) {
        slick.slick("slickPrev");
    });
}

function renderCarrusel() {
    var slick = $('.topic-slider').slick({
        lazyload: 'ondemand',
        infinite: true,
        slidesToShow: 5,
        dots: false,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1438,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.next').on('click', function (e) {
        slick.slick("slickNext");
    });

    $('.prev').on('click', function (e) {
        slick.slick("slickPrev");
    });
}