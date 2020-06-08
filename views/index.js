$("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var recap = $("#recap").val();
    
    if(!recap) {
        var response = grecaptcha.getResponse();
        if(response.length == 0) {
            document.getElementById('g-recaptcha-error').innerHTML = '<div>This field is required.</div>';
        return false;
        };
    };
    
//    if(name && email && message) {
//        $("#alert_success").html('<div class="alert alert-primary text-center alert-dismissible fade show" role="alert"><div id="space"></div><h5>Thank you <u>' + name + '</u> for Contacting Us!</h5><span>We will get back to you as soon as possible. :)</span><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
//
//        name = $("#name").val("");
//        email = $("#email").val("");
//        message = $("#message").val("");
//
//        $(".form-control").addClass("grey");
//        $(".invalid-feedback").addClass("hide");
//    } else {
//        $("#alert_success").html('');
//        $(".form-control").removeClass("grey");
//        $(".invalid-feedback").removeClass("hide");
//    };
    if(name && email && message) {
        $(".success-message").html("<h5>Thank you <u>" + name + "</u> for contacting us!</h5><p>We will get back to you as soon as possible.</p>");
        $(".success-message").removeClass('no-display');
        console.log("okay");
    };
}); 

function verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML = '';
};




















//const socket = io();
//
//socket.on('connect', function() {
//    console.log('Connected to server.');
//});
//socket.on('disconnect', function() {
//    console.log('Disconnected from server.');
//});
