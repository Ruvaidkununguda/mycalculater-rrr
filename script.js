function countWords() {
    var text = document.getElementById("textInput").value;
    var wordCounts = {};
    var totalWordCount = 0;
    var wordPattern = /\b(\w+)\s*(\d+)?\b/g;
    var match;
    var column1 = document.createElement('div');
    var column2 = document.createElement('div');
    var wordCountsContainer = document.getElementById('wordCounts');
    wordCountsContainer.innerHTML = '';

    while ((match = wordPattern.exec(text)) !== null) {
        var word = match[1];
        var count = match[2] ? parseInt(match[2]) : 1;
        totalWordCount += count;

        if (wordCounts[word]) {
            wordCounts[word] += count;
        } else {
            wordCounts[word] = count;
        }
    }

    var words = Object.keys(wordCounts);
    var midIndex = Math.ceil(words.length / 2);

    for (var i = 0; i < midIndex; i++) {
        var word = words[i];
        var count = wordCounts[word];
        var wordElement = document.createElement('div');
        wordElement.textContent = word + ': ' + count;
        wordElement.classList.add('column');
        column1.appendChild(wordElement);
    }

    for (var j = midIndex; j < words.length; j++) {
        var word = words[j];
        var count = wordCounts[word];
        var wordElement = document.createElement('div');
        wordElement.textContent = word + ': ' + count;
        wordElement.classList.add('column');
        column2.appendChild(wordElement);
    }

    wordCountsContainer.appendChild(column1);
    wordCountsContainer.appendChild(column2);

    // Display total count
    var totalElement = document.createElement('div');
    totalElement.textContent = "TOTAL CODE: " + totalWordCount;
    totalElement.classList.add('total');
    wordCountsContainer.appendChild(totalElement);
}