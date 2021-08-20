const div1 = document.querySelector('#div1');
$('form').submit(function (event) {
    event.preventDefault();
    async function getData() {
        const resp = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { api_key: "O1brkUamMZnLkSV9j2CmyaObHsghSEnY", q: `${event.target[0].value}` }, limit: "1" });
        const gif = resp.data.data[0].images.original.url;
        newImg = document.createElement('img');
        newImg.setAttribute("src", `${gif}`);
        newImg.setAttribute("class", "m-3");
        
        div1.append(newImg);
        $("input:text"). val(""); 
    }
    getData();
})
$('#remove').click(
    function () {
        $('img').remove();
    });