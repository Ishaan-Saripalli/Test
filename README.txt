ANAHATA MUSIC ACADEMY — CERTIFICATE SEARCH PAGE
=================================================

Files
-----
certificates.html  The search page
certificates.js    The list of names and their PDF paths

Install on your existing GitHub Pages website
----------------------------------------------
1. Upload certificates.html and certificates.js to the same folder as your
   existing index.html (usually the repository root).
2. Create this folder in your repository:
   assets/certificates/
3. Upload each student's PDF into that folder, using the matching filename:
   01.pdf for the first name, 02.pdf for the second, ... 30.pdf for the 30th.
   Keep the filenames and paths in certificates.js in sync with the PDFs.
4. Open certificates.html in your browser to test it.
5. Commit and push the files to GitHub. Your page will be available at:
   https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/certificates.html
   (For a custom domain, use your domain followed by /certificates.html.)

Add more students
-----------------
Open certificates.js and add another record inside CERTIFICATES:
  { name: "Student Name", pdf: "assets/certificates/31.pdf" }

Important
---------
- The page is static and does not need a server or database.
- The included names are the 30 names currently provided. Check spelling and
  confirm that each student is comfortable with their certificate being
  available through a public website before publishing.
- Anyone who knows a PDF's direct URL may be able to open it. A name search
  is not a privacy or access-control system.
- The PDF files are not included in this ZIP; add your own certificate PDFs.
