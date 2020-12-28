$('#sendMail').on('click', function () {
    let email = $('#email').val().trim();
    let name = $('#name').val().trim();
    let phone = $('#phone').val().trim();

    if(email === ''){
        $('#errorMessage').text('Write your email');
        return false
    }else if(name === ''){
        $('#errorMessage').text('Write your name');
        return false
    }else if(phone === ''){
        $('#errorMessage').text('Write your phone');
        return false
    }

    $('#errorMessage').text('');


    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'email': email, 'phone': phone },
        dataType: 'html',
        beforeSend: function () {
            $('#sendMail').prop('disabled', true)
        },
        success: function (data) {
            if(!data){
                alert('Some errors appeared, your message was not sent!');
            }else{
                $('#mailForm').trigger('reset');
            }

            $('#sendMail').prop('disabled', false)

            alert(data)
        }
    })
})