<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b, _c, _d;
    // Function to save content to localStorage
    function saveContent() {
        var editableElements = document.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(function (el) {
            localStorage.setItem(el.id, el.innerHTML);
        });
    }
    // Restore content from localStorage
    function restoreContent() {
        var editableElements = document.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(function (el) {
            var savedContent = localStorage.getItem(el.id);
            if (savedContent) {
                el.innerHTML = savedContent;
            }
        });
    }
    // Call restoreContent on page load to initialize content
    restoreContent();
    // Event listener for the Save button
    (_a = document.getElementById('saveBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', saveContent);
    // Theme switcher functionality
    var themeSwitcher = document.getElementById('themeSwitcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', function () {
            document.body.classList.toggle('theme-dark');
        });
    }
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('focusout', function () {
            var links = element.querySelectorAll('a');
            links.forEach(function (link) {
                var _a;
                link.setAttribute('href', ((_a = link.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '');
            });
        });
        element.addEventListener('click', function (event) {
            var target = event.target;
            if (target.tagName === 'A') {
                event.preventDefault();
                var url = target.getAttribute('href');
                if (url) {
                    window.open(url, '_blank');
                }
            }
        });
    });
    // Event listener for the Download Resume button
    (_b = document.getElementById('downloadResume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        window.print();
    });
    // Event listener to generate a unique URL based on the name
    (_c = document.getElementById('generateLink')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        var _a;
        var userName = (_a = document.getElementById('name').textContent) === null || _a === void 0 ? void 0 : _a.trim();
        if (userName) {
            // Create a unique URL based on the user’s name
            var resumeUrl = "".concat(window.location.origin, "/resume/").concat(encodeURIComponent(userName));
            document.getElementById('resumeLink').value = resumeUrl;
        }
        else {
            alert('Please enter your name');
        }
    });
    // Event listener for the Share Resume button to copy the unique link
    (_d = document.getElementById('shareResume')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
        var resumeLink = document.getElementById('resumeLink').value;
        if (resumeLink) {
            navigator.clipboard.writeText(resumeLink).then(function () {
                alert('Resume link copied to clipboard');
            }, function () {
                alert('Failed to copy the link');
            });
        }
        else {
            alert('Generate the link first');
        }
    });
});
=======
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b, _c, _d;
    // Function to save content to localStorage
    function saveContent() {
        var editableElements = document.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(function (el) {
            localStorage.setItem(el.id, el.innerHTML);
        });
    }
    // Restore content from localStorage
    function restoreContent() {
        var editableElements = document.querySelectorAll('[contenteditable="true"]');
        editableElements.forEach(function (el) {
            var savedContent = localStorage.getItem(el.id);
            if (savedContent) {
                el.innerHTML = savedContent;
            }
        });
    }
    // Call restoreContent on page load to initialize content
    restoreContent();
    // Event listener for the Save button
    (_a = document.getElementById('saveBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', saveContent);
    // Theme switcher functionality
    var themeSwitcher = document.getElementById('themeSwitcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', function () {
            document.body.classList.toggle('theme-dark');
        });
    }
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('focusout', function () {
            var links = element.querySelectorAll('a');
            links.forEach(function (link) {
                var _a;
                link.setAttribute('href', ((_a = link.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '');
            });
        });
        element.addEventListener('click', function (event) {
            var target = event.target;
            if (target.tagName === 'A') {
                event.preventDefault();
                var url = target.getAttribute('href');
                if (url) {
                    window.open(url, '_blank');
                }
            }
        });
    });
    // Event listener for the Download Resume button
    (_b = document.getElementById('downloadResume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        window.print();
    });
    // Event listener to generate a unique URL based on the name
    (_c = document.getElementById('generateLink')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        var _a;
        var userName = (_a = document.getElementById('name').textContent) === null || _a === void 0 ? void 0 : _a.trim();
        if (userName) {
            // Create a unique URL based on the user’s name
            var resumeUrl = "".concat(window.location.origin, "/resume/").concat(encodeURIComponent(userName));
            document.getElementById('resumeLink').value = resumeUrl;
        }
        else {
            alert('Please enter your name');
        }
    });
    // Event listener for the Share Resume button to copy the unique link
    (_d = document.getElementById('shareResume')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
        var resumeLink = document.getElementById('resumeLink').value;
        if (resumeLink) {
            navigator.clipboard.writeText(resumeLink).then(function () {
                alert('Resume link copied to clipboard');
            }, function () {
                alert('Failed to copy the link');
            });
        }
        else {
            alert('Generate the link first');
        }
    });
});
>>>>>>> 06cb29657a1b89e7016879d6d444bae9be564037
