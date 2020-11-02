export  function isDateBetween (date, from , to) {
    let dateObj = new Date(date);
    let fromObj = new Date(from );
    let toObj = new Date( to);


    return dateObj >= fromObj && dateObj <= toObj;

}