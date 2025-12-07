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

// click me button
const clickMe = () => {
    $("#modal1").modal("open");
};

// form submission
const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted:", formData);
};

// add cards
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
                        '<p class="card-text black-text">' + item.desciption + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';
        $("#card-section").append(cardHTML);
    });
};

// Get projects
const getProjects = () => {
    $.get('/api/projects',(response) => {
        if(response.statusCode==200){
            addCards(response.data);
        }
    })
}

// document ready
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();

    $('#clickMeButton').click(() => {
        clickMe();
    });

    $('#formSubmit').click(() => {
        submitForm();
    });

    // keep only first static card
    $('#card-section > .col.s4').slice(1).remove();

    // fetch dynamic cards from server
    getProjects();
});
