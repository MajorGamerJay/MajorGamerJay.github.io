/* List of articles */
var pages = document.getElementById('articles');
pages.innerHTML = "";

/* Format options for displaying date of articles */
const format_options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

/* Available tags of articles */
var all_tags = [
    'games', 'anime', 'review',
    'tech', 'tutorial', 'book',
    'movie', 'tv', 'philosophy',
    'opinion', 'nutshell', 'critique',
    'self' ];

/* Tags to be filtered with according to checkboxes */
var filtered_tags = [];

/* Replacing date string with Date objects in page object */
function replaceDateStrToDateObj(list) {
    var temp = "";
    list.forEach(page => {
        temp = page.date;
        page.date = new Date(temp);
    });
}

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

/* Main function to run after filtered tags are applied */
function reFilter() {
    addFilteredTags(all_tags); // Add filtered tags from all_tags array
    var page_list = [];

    // Fetch data and work with it
    fetch('./pages.json').then((response) => response.json())
        .then((json) => {
            page_list = json.pages.map(a => ({...a}));
        if (filtered_tags.length != 0)
            page_list = page_list.filter(checkTagged);

        replaceDateStrToDateObj(page_list);

        // Sorting by the given options: time/order
        if (document.getElementById('latest').checked)
            page_list.sort((a, b) => {
                return b.date - a.date;
            });

        else if (document.getElementById('oldest').checked)
            page_list.sort((a, b) => {
                return a.date - b.date;
            });

        else if (document.getElementById('ascending').checked)
            page_list.sort((a, b) => {
                return a.name > b.name;
            });

        else if (document.getElementById('descending').checked)
            page_list.sort((a, b) => {
                return b.name > a.name;
            });

        // Default sort, by latest
        else
            page_list.sort((a, b) => {
                return b.date - a.date;
            });

        pages.innerHTML = "";

        // Apply changes
        page_list.forEach(each_page => {
            pages.innerHTML += `<li><a href=\"${each_page.link}\">${each_page.name}</a><hr><time>${each_page.date.toLocaleDateString('en-US', format_options)}</time></li>`;
        });
    });
}

/* Default callback for showing articles
   Yes, I understand it is repetitive, but I couldn't
    find a way to abstract the callback functions, because
    any variables referenced from outside the callback functions
    does not contain the data acquired from the fetch function */
fetch('./pages.json')
    .then((response) => response.json())
    .then((json) => {
        var page_list = json.pages.map(a => ({...a})); // Clones the array
        replaceDateStrToDateObj(page_list);
        // Sort by latest
        page_list.sort((a, b) => {
            return b.date - a.date;
        });

        // Add list for the first time
        page_list.forEach(each_page => {
            pages.innerHTML += `<li><a href=\"${each_page.link}\">${each_page.name}</a><hr><time>${each_page.date.toLocaleDateString('en-US', format_options)}</time></li>`;
        }
    )});
