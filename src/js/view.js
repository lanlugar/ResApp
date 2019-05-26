import elements from './base';

export const addActiveClass = (btn) => {
    const els = Array.from(elements.selectBtns);
    els.forEach(el => {
        if(el.classList.contains('active__btn')){
            el.classList.remove('active__btn');
        }
       
    })
    btn.classList.add('active__btn');

}


export const showFilter = (filterElement) => {
   const els = Array.from(elements.filterCategories);
    els.forEach(el => {
        el.style.display = 'none';
    })
    
    filterElement.style.display = "block";
}