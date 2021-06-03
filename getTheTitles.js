const getTheTitles = function (data) {

    const newData = [];
    data.forEach( item => newData.push( item.title ) );
    
    return newData;

};

module.exports = getTheTitles;