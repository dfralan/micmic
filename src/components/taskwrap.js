


var taskwrapview = `

<!-- Popular activities -->
<div class="width-100 display-flex padded no-padded-left no-padded-right">
  <div class="land display-flex flex-col m-gap">
    <h2 class="">
      Obtené ayuda hoy 
    </h2>
    <div id="categoryPillsContainerHero" class='compacted display-flex flex-wrap s-gap width-100 padded no-padded-left no-padded-right no-padded-top'>  
                ${constructCategoriesHero(categories)}
            </div>
  </div>    
</div>
`

function constructCategoriesHero(categories) {
    var categoriesConstruction = '';
    
    categories.categorias.forEach(category => {

            if (category.codigo === "000") {
                return
            } else {
                const categoryHTML = `
                <h3 style='border-width: 1.4px; ; border-color: #0D7A5F; color: #0D7A5F' data-code='${category.codigo}' class="cursor-pointer no-wrap font-500 decoration-none rounded-s border-solid xs-padded popularCategoryItem">
                    ${category.nombre}
                </h3>
                `;
                categoriesConstruction += categoryHTML;
            }
            
        });

    return categoriesConstruction;
    
}


