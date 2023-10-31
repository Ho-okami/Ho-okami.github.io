function showAllImages() {
    $('.image').show();}

    // Filter images when a button is clicked
    $('.btn').on('click', function() {
        const filter = $(this).data('filter');
        $('.image').hide();
        if (filter === 'all') {
            $('.image').show();
        } else {
            $(`.image[data-category*="${filter}"]`).show();
        }
    });

    showAllImages();