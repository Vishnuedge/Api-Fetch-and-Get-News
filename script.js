

alert('SEARCH BY TOPIC AND GET NEWS')

let getNews =async ()=>{

    let textBox = document.querySelector('#textBox').value;
    let url = `https://gnews.io/api/v4/search?q=${textBox}&lang=en&token=ab6a042af0dcf77da8e6d8080c634d16`

    let response = await fetch(url);
    let result =await response.json();
    console.log(result);
    let data =  result.articles.map(a =>{
        return a;
    });
    
    data.forEach(element => {
        let container  = document.querySelector('.container');

        let card  = document.createElement('card')
        card.setAttribute('class','card mb-3 bg-light  mt-2')
        // card.setAttribute('style','height: auto')
        //ROW
        let row = document.createElement('div')
        row.setAttribute('class','row')
        //COLUMN 1 :
        let column1 = document.createElement('div');
        column1.setAttribute('class','col-lg-3 ')
        var image = document.createElement('img')
        image.setAttribute('class',' card-img-top')
        image.setAttribute('style','height: 18rem')
        image.src = element.image;
        image.alt = "no image"
        
        //COLUMN 2 :
        let column2 = document.createElement('div')
        column2.setAttribute('class',' col-lg-9 ');
        let cardBody = document.createElement('div')
        cardBody.setAttribute('class','card-body');

        //ARTICLE :
        let article =  document.createElement('h5');
        article.setAttribute('class','card-title mt-5 fw-bold')
        article.innerText = element.source.name;
        article.setAttribute('style','text-transform :uppercase');
        article.setAttribute('style','color: green')
        

        //HEADER :
        let header = document.createElement('h3');
        header.setAttribute('class','card-title mt-2 fw-bold')
        header.innerText = element.title;

        //DESCRIPTION
        let para1 = document.createElement('p');
        para1.setAttribute('class','card-text');
        para1.innerText = element.description;

        let rank = document.createElement('h4');
        rank.setAttribute('class','badge bg-primary');
        rank.innerText = `Published At : ${element.publishedAt}`


        column1.append(image);
        column2.append(article)
        column2.append(header);
        column2.append(para1);
        column2.append(rank);
        row.append(column1);
        row.append(column2);
        card.append(row);
        container.append(card)
    });
    
  
}