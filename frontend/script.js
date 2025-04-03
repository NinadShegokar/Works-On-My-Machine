// Initialize highlight.js
hljs.highlightAll();

// Function to display results
async function displayResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    const analysisContent = resultsContainer.querySelector('#analysis .content');
    const solutionsContent = resultsContainer.querySelector('#solutions .solutions-content');
    
    // Display analysis
    analysisContent.innerHTML = `<p>${results[0].analysis}</p>`;
    
    // Display solutions
    solutionsContent.innerHTML = '';
    results.forEach(result => {
        const solutionDiv = document.createElement('div');
        solutionDiv.className = 'solution';
        
        solutionDiv.innerHTML = `
            <h3>Approach ${result.approach_index}</h3>
            <div class="solution-plan">
                <h4>Solution Plan:</h4>
                <p>${result.solution_plan}</p>
            </div>
            <div class="implementation">
                <h4>Implementation:</h4>
                <pre><code class="language-python">${result.final_solution}</code></pre>
            </div>
        `;
        
        solutionsContent.appendChild(solutionDiv);
    });
    
    // Show the results container
    resultsContainer.classList.remove('hidden');
    
    // Re-initialize highlight.js for new code blocks
    resultsContainer.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

// Function to submit question
async function submitQuestion() {
    const questionInput = document.getElementById('questionInput');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const resultsContainer = document.getElementById('resultsContainer');
    
    // Show loading indicator
    loadingIndicator.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    
    try {
        const response = await fetch('http://localhost:8000/solve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: questionInput.value }),
        });
        
        const data = await response.json();
        
        if (data.status === 'success') {
            await displayResults(data.results);
        } else {
            alert('Error: ' + data.message);
        }
    } catch (error) {
        alert('Error connecting to server: ' + error.message);
    } finally {
        loadingIndicator.classList.add('hidden');
    }
}

// Add event listener for Enter key in textarea
document.getElementById('questionInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        submitQuestion();
    }
});