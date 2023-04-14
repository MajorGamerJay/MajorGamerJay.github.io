/* List of articles */
var books = document.getElementById('books');
var plan_to_read = document.getElementById('plan_to_read');
var authors_select = document.getElementById('author-select');

books.innerHTML = "<tr><th>Name</th><th>Author</th><th>Rating</th></tr>";
plan_to_read.innerHTML = "<tr><th>Name</th><th>Author</th></tr>";

/* Tags to be filtered with according to checkboxes */
var filtered_tags = [];

/* Adding filtered tags to array of filtered tags */
function addFilteredTags(list) {
    filtered_tags = [];
    list.forEach(tag => {
        if (document.getElementById(tag).checked)
            filtered_tags.push(tag);
    });
}

/* Comparison function for sorting by tags */
function checkTagged(page) {
    var pass = true;
    filtered_tags.forEach(tag => {
        if(!page.tags.includes(tag))
            pass = false;
    });
    
    return pass;
}

function checkAuthor(book) {
    if(book.author == authors_select.options[authors_select.selectedIndex].innerHTML)
        return true;
    else
        return false;
}

/* Main function to run after filtered tags are applied */
function reFilter() {
    books.innerHTML = "<tr><th>Name</th><th>Author</th><th>Rating</th></tr>";
    plan_to_read.innerHTML = "<tr><th>Name</th><th>Author</th></tr>";
    // Fetch data and work with it
    fetch('./books.json').then((response) => response.json())
        .then((json) => {
            addFilteredTags(json.tags); // Add filtered tags from all_tags array
            var book_list = [];
            var plan_to_read_list = [];

            book_list = json.books.map(a => ({...a}));
            plan_to_read_list = json.plan_to_read.map(a => ({...a}));

        if (filtered_tags.length != 0)
            book_list = book_list.filter(checkTagged);

        if (!(authors_select.options[authors_select.selectedIndex].innerHTML == "None"))
            book_list = book_list.filter(checkAuthor);

        if (document.getElementById('ascending').checked) {
            book_list.sort((a, b) => {
                return a.name > b.name;
            });

            plan_to_read_list.sort((a, b) => {
                return a.name > b.name;
            });
        }

        else if (document.getElementById('descending').checked) {
            book_list.sort((a, b) => {
                return b.name > a.name;
            });

            plan_to_read_list.sort((a,b) => {
                return a.name < b.name;
            });
        }

        else if (document.getElementById('top_rate').checked) {
            book_list.sort((a, b) => {
                return parseFloat(a.rating) < parseFloat(b.rating);
            });

            plan_to_read_list.sort((a,b) => {
                return a.name > b.name;
            });
        }

        else if (document.getElementById('least_rate').checked) {
            book_list.sort((a, b) => {
                return parseFloat(a.rating) > parseFloat(b.rating);
            });

            plan_to_read_list.sort((a,b) => {
                return a.name > b.name;
            });
        }
            
        // Default sort, by latest
        else
            book_list.sort((a, b) => {
                return parseFloat(a.rating) > parseFloat(b.rating);
            });

        // Apply changes
        book_list.forEach(each_book => {
            books.innerHTML += `<tr><td>${each_book.name}</td><td>${each_book.author}</td><td>${each_book.rating}</td></tr>`;
        });
        plan_to_read_list.forEach(each_book => {
            plan_to_read.innerHTML += `<tr><td>${each_book.name}</td><td>${each_book.author}</td></tr>`;
        });
    });
}

/* Default callback for showing articles
   Yes, I understand it is repetitive, but I couldn't
    find a way to abstract the callback functions, because
    any variables referenced from outside the callback functions
    does not contain the data acquired from the fetch function */
fetch('./books.json')
    .then((response) => response.json())
    .then((json) => {
        var book_list = json.books.map(a => ({...a})); // Clones the array
        json.authors.forEach(author => {
            document.getElementById('author-select').innerHTML += `<option>${author}</option>`;
        });

        book_list.sort((a,b) => {
            return a.name > b.name;
        });

        // Add list for the first time
        book_list.forEach(each_book => {
            books.innerHTML += `<tr><td>${each_book.name}</td><td>${each_book.author}</td><td>${each_book.rating}</td></tr>`;
        });

        var plan_to_read_list = json.plan_to_read.map(a => ({...a}));

        plan_to_read_list.sort((a,b) => {
            return a.name > b.name;
        });

        plan_to_read_list.forEach(each_book => {
            plan_to_read.innerHTML += `<tr><td>${each_book.name}</td><td>${each_book.author}</td></tr>`;
        });
    });
