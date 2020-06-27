
//poem-1
const loadPoems1 = () => {


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "poem1.txt", true);

    xhr.onload = () => {
        // xhr.contentType = text;
        if(xhr.status === 200) {
            const display1 = xhr.responseText;
            
            let output1 = `
            <p><pre class="pre"> ${display1} </pre> </p>
            `
            document.getElementById("poem").innerHTML = output1;
        }

        else if (xhr.status === 404) {
            document.getElementById("poem").innerHTML = "Not found";
        }
    }

    xhr.onerror = () => {
        document.getElementById("poem").innerHTML = "Request Error";
    }

    xhr.send();
}

const btn1 = document.getElementById("btn1").addEventListener("click", loadPoems1);


// poem-2

const loadPoems2 = () => {


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "poem2.txt", true);

    xhr.onload = () => {
        // xhr.contentType = text;
        if(xhr.status === 200) {
            const display2 = xhr.responseText;
            
            let output2 = `
            <p><pre class="pre"> ${display2} </pre> </p>
            `
            document.getElementById("poem").innerHTML = output2;
        }

        else if (xhr.status === 404) {
            document.getElementById("poem").innerHTML = "Not found";
        }
    }

    xhr.onerror = () => {
        document.getElementById("poem").innerHTML = "Request Error";
    }

    xhr.send();
}

const btn2 = document.getElementById("btn2").addEventListener("click", loadPoems2);

// poem-3

const loadPoems3 = () => {


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "poem3.txt", true);

    xhr.onload = () => {
        // xhr.contentType = text;
        if(xhr.status === 200) {
            const display3 = xhr.responseText;
            
            let output3 = `
            <p><pre class="pre"> ${display3} </pre> </p>
            `
            document.getElementById("poem").innerHTML = output3;
        }

        else if (xhr.status === 404) {
            document.getElementById("poem").innerHTML = "Not found";
        }
    }

    xhr.onerror = () => {
        document.getElementById("poem").innerHTML = "Request Error";
    }

    xhr.send();
}

const btn3 = document.getElementById("btn3").addEventListener("click", loadPoems3);
