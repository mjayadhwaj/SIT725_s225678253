// dynamic card list with description
const cardList = [
    {
        title: "Book 5",
        image: "images/book1.jpg",
        link: "About Book 5",
        desciption: "This book helps to gain knowledge about the strong communication skills"
    },
    {
        title: "Book 6",
        image: "images/book3.jpg",
        link: "About Book 6",
        desciption: "The book is about the most talented skills to be learned in 2026"
    },
  
];

// Previous- click me button ( done in first part of this task )
//const clickMe = () => {
   // alert("Thanks for clicking - this is the JavaScript enabled feature!! Come again..");
//};

const clickMe = () => {
    $("#modal1").modal("open");
};

// Submitting the form usign submitform
const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted:", formData);
};


// Add function for the cards 
const addCards = (items) => {
    items.forEach(item => {
        let cardHTML =
            '<div class="col s4 center-align">' +
                '<div class="card medium">' +

                    '<div class="card-image waves-effect waves-block waves-light">' +
                        '<img class="activator" src="' + item.image + '">' +
                    '</div>' +

                    '<div class="card-content">' +
                        '<span class="card-title activator grey-text text-darken-4">' +
                            item.title +
                            '<i class="material-icons right">more_vert</i>' +
                        '</span>' +
                        '<p><a href="#">' + item.link + '</a></p>' +
                    '</div>' +

                    '<div class="card-reveal">' +
                        '<span class="card-title grey-text text-darken-4">' +
                            item.title +
                            '<i class="material-icons right">close</i>' +
                        '</span>' +
                        '<p class="card-text grey-text text-darken-4">' + item.desciption + '</p>' +
                    '</div>' +
                    '<div class="card-reveal">' +
    '<span class="card-title grey-text text-darken-4">' +
        item.title +
        '<i class="material-icons right">close</i>' +
    '</span>' +
    '<p class="card-text black-text grey-text text-darken-4">' + item.desciption + '</p>' +
'</div>' +


                '</div>' +
            '</div>';

        $("#card-section").append(cardHTML);
    });
};

// Document ready function to perform several actions
$(document).ready(function () {
    $('.materialboxed').materialbox();
    
    // click button
    $('#clickMeButton').click(() => {
        clickMe();
    });

    $('#formSubmit').click(() => {
        submitForm();
    });

    $('.modal').modal();

    // static card
    $('#card-section > .col.s4').slice(1).remove();

    // Dynamic cards will be added
    addCards(cardList);
});
