document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('memeForm');
    const memeDisplay = document.getElementById('memeDisplay');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const topText = document.getElementById('topText').value.trim();
        const bottomText = document.getElementById('bottomText').value.trim();
        const memeImageUrl = document.getElementById('memeImageUrl').value.trim();

        if (!topText || !bottomText || !memeImageUrl) {
            alert('All fields are required!');
            return;
        }

        const memeContainer = document.createElement('div'); // New container to wrap the meme and delete button
        memeContainer.className = 'meme-container';

        // Create the meme display
        const memeDiv = document.createElement('div');
        memeDiv.className = 'meme';

        const memeImage = new Image();
        memeImage.src = memeImageUrl;
        memeImage.onload = function() {
            memeDiv.style.width = this.width + "px";
            memeDiv.appendChild(memeImage);

            const topTextDiv = document.createElement('div');
            topTextDiv.className = 'meme-text top';
            topTextDiv.innerText = topText;
            memeDiv.appendChild(topTextDiv);

            const bottomTextDiv = document.createElement('div');
            bottomTextDiv.className = 'meme-text bottom';
            bottomTextDiv.innerText = bottomText;
            memeDiv.appendChild(bottomTextDiv);

            memeContainer.appendChild(memeDiv); 
            // Append memeDiv to memeContainer

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete Meme';
            deleteButton.onclick = function () {
                memeDisplay.removeChild(memeContainer); 
                // Adjusted to remove memeContainer
            };
            memeContainer.appendChild(deleteButton); 
            // Append deleteButton to memeContainer

            memeDisplay.appendChild(memeContainer); 
            // Append memeContainer to memeDisplay
        };
        memeImage.onerror = function() {
            alert('Failed to load image. Please ensure the image URL is correct and the server allows external access (no CORS restriction).');
        };

        // Clear the form fields
        document.getElementById('topText').value = '';
        document.getElementById('bottomText').value = '';
        document.getElementById('memeImageUrl').value = '';
    });
});
