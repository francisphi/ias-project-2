let btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
    event.preventDefault(); 

    const questions = [
        'num-1',
        'num-2',
        'num-3',
        'num-4',
        'num-5',
        'num-6',
        'num-7',
        'num-8',
        'num-9',
        'num-10'
    ];
    let allAnswered = true; 
    questions.forEach(question => {
        const radios = document.getElementsByName(question);
        const isChecked = Array.from(radios).some(radio => radio.checked);
        if (!isChecked) {
            allAnswered = false; 
        }
    });

    if (!allAnswered) { 
        swal({
            title: "Error!",
            text: "Please fill up all questions!",
            icon: "error",
        });
    } else {
        
        swal({
            title: "Good Job!",
            text: "Success!",
            icon: "success",
        }).then(() => {
            window.location.href = "index.html";
        });
    }
});
