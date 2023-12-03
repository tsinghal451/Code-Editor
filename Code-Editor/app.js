function run() {
    // Get the code from HTML, CSS, and JavaScript textareas
    var htmlCode = document.getElementById('html-code').value;
    var cssCode = document.getElementById('css-code').value;
    var jsCode = document.getElementById('js-code').value;

    // Get the iframe element
    var outputFrame = document.getElementById('output');

    // Combine HTML, CSS, and JavaScript code
    var combinedCode = `
        <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
        </html>
    `;

    // Update the content of the iframe
    outputFrame.srcdoc = combinedCode;
}

// Run the function initially
run();
