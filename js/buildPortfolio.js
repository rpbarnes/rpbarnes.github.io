var thumbNails = ['ExplodingRainDropsJuly2016-thumb.jpg','FrozenRosePainterlyNovember2016-thumb.jpg','BreckenridgeSunsetJuly2016-thumb.jpg','GoldenGateNightTimeDecember2016-thumb.jpg','NiksRainDanceAugust2016-thumb.jpg','PacificaSunsetDecember2016-thumb.jpg'];
var highRes = ['ExplodingRainDropsJuly2016.jpg','FrozenRosePainterlyNovember2016.jpg','BreckenridgeSunsetJuly2016.jpg','GoldenGateNightTimeDecember2016.jpg','NiksRainDanceAugust2016.jpg','PacificaSunsetDecember2016.jpg'];
var header = 'img/activePictures/'

//$('document').ready( function() {
for (i=0; i<thumbNails.length; i++) {
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

    // Now add the modal functionality to each figure. // It looks like it's better to use react to do this.
    // Create variables
    var divModal = document.createElement('div');
    var divModalContent = document.createElement('div');
    var divClose = document.createElement('div');
    var divLR = document.createElement('div');
    var divRL = document.createElement('div');
    var divContainer = document.createElement('div');
    var divRow = document.createElement('div');
    var divColumn = document.createElement('div');
    var divBody = document.createElement('div');
    var h2 = document.createElement('H2');
    var title = document.createTextNode('Title');
    var hr = document.createElement('HR');
    var img = document.createElement('img');
    var para = document.createElement('p');
    var description = document.createTextNode('This is a description. You should pull this from file.');

    // Set parameters of each variable
    divModal.className = 'portfolio-modal modal fade';
    divModal.setAttribute('id','portfolioModal' + i);
    divModal.setAttribute('tabindex','-1');
    divModal.setAttribute('role','dialog');
    divModal.setAttribute('aria-hidden','true');
    divModalContent.className = 'modal-content';
    divClose.className = 'close-modal';
    divClose.setAttribute('data-dismiss','modal');
    divLR.className = 'lr'; // I have no idea what these do...
    divRL.className = 'rl';
    divContainer.className = 'container';
    divRow.className = 'row';
    divColumn.className = 'col-lg-8 col-lg-offset-2';
    divBody.className = 'modal-body';
    hr.className = 'star-primary';
    img.className = 'img-responsive img-centered';
    img.src = header + highRes[i];

    // append all the childrens
    // For the close button
    divLR.appendChild(divRL);
    divClose.appendChild(divLR);
    // For showing the image
    h2.appendChild(title);
    para.appendChild(description);
    divBody.appendChild(h2);
    divBody.appendChild(hr);
    divBody.appendChild(img);
    divBody.appendChild(para);
    divColumn.appendChild(divBody);
    divRow.appendChild(divColumn);
    divContainer.appendChild(divRow);
    // Wrap up the entire modal
    divModalContent.appendChild(divClose);
    divModalContent.appendChild(divContainer);
    divModal.appendChild(divModalContent);

    // put this modal in the DOM under body
    document.getElementById('page-top').appendChild(divModal);




}
//});


