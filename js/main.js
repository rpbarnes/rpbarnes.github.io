var thumbNails = ['ExplodingRainDropsJuly2016-thumb.jpg','FrozenRosePainterlyNovember2016-thumb.jpg','BreckenridgeSunsetJuly2016-thumb.jpg'];
var header = 'img/thumbNail/'

//$('document').ready( function() {
for (i=0; i<3; i++) {
    // generate the grid profile view.
    var divCol = document.createElement('div');
    var a = document.createElement('a');
    var divCaption = document.createElement('div');
    var divContent = document.createElement('div');
    var icon = document.createElement('i');

    var img = document.createElement('img');


    // define content for each element
    icon.className = 'fa fa-search-plus fa-3x';
    divContent.className = 'caption-content';
    divCaption.className = 'caption';
    a.className = 'portfolio-link';
    a.setAttribute('href','#portfolioModal'+i);
    a.setAttribute('data-toggle','modal');
    divCol.className = 'col-sm-4 portfolio-item';
    img.className = 'img-responsive';
    console.log(header+thumbNails[i]);

    img.src = header+thumbNails[i];

    // wrap all elements up based on nesting 
    divContent.appendChild(icon);
    divCaption.appendChild(divContent);
    a.appendChild(divCaption);
    a.appendChild(img);
    divCol.appendChild(a);

    // put this into the document
    document.getElementById('portfolio-row').appendChild(divCol);

    // Now add the modal functionality to each figure.
}
//});


