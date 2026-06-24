document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.plant-section');
  const globalSearch = document.getElementById('plantSearch');
  const viveroGrid = document.getElementById('viveroGrid');
  const viveroSearch = document.getElementById('viveroSearch');
  const filterPills = document.querySelectorAll('.filter-pill');
  const statPills = document.querySelectorAll('.stat-pill');

  // Base de Datos Completa de Especies del Vivero (según PDF adjunto)
  const viveroPlants = [
    // === SEMISOMBRA Y SOL DIRECTO ===
    { especie: "Bailarinas", cientifico: "Fuchsia magellanica", categoria: "semisombra", imagen: "assets/images/bailarinas.png"},
    { especie: "Geranio rey", cientifico: "Pelargonium grandiflorum", categoria: "semisombra", imagen: "assets/images/geraniorey.png"},
    { especie: "Floripondio", cientifico: "Sin nombre científico registrado", categoria: "semisombra", imagen: "assets/images/floripondio.png"},
    { especie: "Chiflera", cientifico: "Schefflera arboricola", categoria: "semisombra", imagen: "assets/images/chiflera.png"},
    { especie: "Dormilona", cientifico: "Gazania", categoria: "semisombra", imagen: "assets/images/gazania.png"},
    { especie: "Geranios", cientifico: "Geranium", categoria: "semisombra", imagen: "assets/images/geranio.png"},
    { especie: "Cucardas", cientifico: "Hibiscus rosa-sinensis", categoria: "semisombra", imagen: "assets/images/cucarda.png"},
    { especie: "Caléndula", cientifico: "Calendula officinalis", categoria: "semisombra", imagen: "assets/images/calendula.png"},
    { especie: "Aster de escocia", cientifico: "Symphyotrichum novi-belgii", categoria: "semisombra", imagen: "assets/images/asterdeescocia.png"},
    { especie: "Brillantisima", cientifico: "Coprosma repens", categoria: "semisombra", imagen: "assets/images/brillantisima.png"},
    { especie: "Hipoestes", cientifico: "Hypoestes phyllostachya", categoria: "semisombra", imagen: "assets/images/hipoestes.png"},
    { especie: "Gitanas o cóleo", cientifico: "Coleus scutellarioides", categoria: "semisombra", imagen: "assets/images/gitanas.png"},
    { especie: "Iresine / Sanguinaria", cientifico: "Iresine diffusa f. herbstii", categoria: "semisombra", imagen: "assets/images/iresine.png"},
    { especie: "Cirtodeira", cientifico: "Episcia cupreata", categoria: "semisombra", imagen: "assets/images/cirtodeira.png"},
    { especie: "Ortiga muerta", cientifico: "Lamium maculatum", categoria: "semisombra", imagen: "assets/images/ortigamuerta.png"},
    { especie: "Padoja roja", cientifico: "Sin nombre científico registrado", categoria: "semisombra", imagen: "assets/images/padojaroja.png"},
    { especie: "Margarita leñosa", cientifico: "Argyranthemum frutescens", categoria: "semisombra", imagen: "assets/images/margaritaleñosa.png"},
    { especie: "Margarita africana", cientifico: "Osteospermum ecklonis", categoria: "semisombra", imagen: "assets/images/margaritaafricana.png"},
    { especie: "Pompones", cientifico: "Bellis perennis", categoria: "semisombra", imagen: "assets/images/pompones.png"},
    { especie: "Primaveras", cientifico: "Primula acaulis", categoria: "semisombra", imagen: "assets/images/primaveras.png"},
    { especie: "Campana de arrastre", cientifico: "Campanula poscharskyana", categoria: "semisombra", imagen: "assets/images/campana.png"},
    { especie: "Violetas africanas", cientifico: "Streptocarpus", categoria: "semisombra", imagen: "assets/images/violetasafricanas.png"},
    { especie: "Clavel", cientifico: "Dianthus caryophyllus", categoria: "semisombra", imagen: "assets/images/clavel.png"},
    { especie: "Fosforito", cientifico: "Cuphea ignea", categoria: "semisombra", imagen: "assets/images/fosforito.png"},
    { especie: "Campanilla de tussock", cientifico: "Campanula carpatica", categoria: "semisombra", imagen: "assets/images/campanilla.png"},
    { especie: "Fresa", cientifico: "Fragaria ananassa", categoria: "semisombra", imagen: "assets/images/fresa.png"},
    { especie: "Flor de nácar", cientifico: "Begonia cucullata", categoria: "semisombra", imagen: "assets/images/flordenacar.png"},
    { especie: "Begonia ala de ángel", cientifico: "Begonia maculata", categoria: "semisombra", imagen: "assets/images/begonia.png"},
    { especie: "Verbenas", cientifico: "Glandularia x hybrida", categoria: "semisombra", imagen: "assets/images/verbenas.png"},
    { especie: "Bergenia", cientifico: "Bergenia crassifolia", categoria: "semisombra", imagen: "assets/images/bergenia.png"},
    { especie: "Rosa miniatura", cientifico: "Rosa hybrida", categoria: "semisombra", imagen: "assets/images/rosaminiatura.png"},
    { especie: "Lantana", cientifico: "Lantana camara", categoria: "semisombra", imagen: "assets/images/lantana.png"},
    { especie: "Hierbabuena / Menta", cientifico: "Mentha spicata", categoria: "semisombra", imagen: "assets/images/hierbabuena.png"},
    { especie: "Orégano", cientifico: "Origanum vulgare", categoria: "semisombra", imagen: "assets/images/oregano.png"},
    { especie: "Menta de agua", cientifico: "Mentha aquatica", categoria: "semisombra", imagen: "assets/images/mentadeagua.png"},
    { especie: "Romero", cientifico: "Salvia rosmarinus", categoria: "semisombra", imagen: "assets/images/romero.png"},
    { especie: "Toronjil", cientifico: "Melissa officinalis", categoria: "semisombra", imagen: "assets/images/toronjil.png"},
    { especie: "Cedroncillo", cientifico: "Aloysia citrodora", categoria: "semisombra", imagen: "assets/images/cedroncillo.png"},
    { especie: "Lavanda", cientifico: "Lavandula angustifolia", categoria: "semisombra", imagen: "assets/images/lavanda.png"},
    { especie: "Ruda", cientifico: "Ruta graveolens", categoria: "semisombra", imagen: "assets/images/ruda.png"},
    { especie: "Boca de sapo", cientifico: "Antirrhinum majus", categoria: "semisombra", imagen: "assets/images/bocadesapo.png"},
    { especie: "Cantu", cientifico: "Cantua buxifolia", categoria: "semisombra", imagen: "assets/images/cantu.png"},
    { especie: "Chiles", cientifico: "Capsicum annuum", categoria: "semisombra", imagen: "assets/images/chiles.png"},
    { especie: "Pepino melón", cientifico: "Solanum muricatum", categoria: "semisombra", imagen: "assets/images/pepinomelon.png"},
    { especie: "Higo", cientifico: "Ficus carica", categoria: "semisombra", imagen: "assets/images/higo.png"},
    { especie: "Ají amarillo", cientifico: "Capsicum baccatum", categoria: "semisombra", imagen: "assets/images/ajiamarillo.png"},
    { especie: "Naranjitas de adorno", cientifico: "Solanum pseudocapsicum", categoria: "semisombra", imagen: "assets/images/naranjitasdeadorno.png"},
    { especie: "Pariguanas o hierba de mirto", cientifico: "Salvia microphylla", categoria: "semisombra", imagen: "assets/images/pariguanas.png"},
    { especie: "Trabajadora", cientifico: "Impatiens balsamina", categoria: "semisombra", imagen: "assets/images/trabajadora.png"},
    { especie: "Pico de loro", cientifico: "Impatiens niamniamensis", categoria: "semisombra", imagen: "assets/images/picodeloro.png"},
    { especie: "Farol chino o japonés", cientifico: "Abutilon pictum", categoria: "semisombra", imagen: "assets/images/farolchino.png"},
    { especie: "Crisantemos", cientifico: "Chrysanthemum x morifolium", categoria: "semisombra", imagen: "assets/images/crisantemos.png"},
    { especie: "Agapanto africano", cientifico: "Agapanthus praecox", categoria: "semisombra", imagen: "assets/images/agapantoafricano.png"},
    { especie: "Tritoma o antorcha", cientifico: "Kniphofia uvaria", categoria: "semisombra", imagen: "assets/images/tritoma.png"},
    { especie: "Palmera yuca gigante", cientifico: "Yucca gigantea", categoria: "semisombra", imagen: "assets/images/palmerayuca.png"},
    { especie: "Jacaranda", cientifico: "Jacaranda mimosifolia", categoria: "semisombra", imagen: "assets/images/jacaranda.png"},
    { especie: "Cantu enano", cientifico: "Sin nombre científico registrado", categoria: "semisombra", imagen: "assets/images/cantuenano.png"},

    // === CACTUS Y SUCULENTAS ===
    { especie: "Kalanchoe", cientifico: "Kalanchoe blossfeldiana", categoria: "cactus", imagen: "assets/images/kalanchoe.png"},
    { especie: "Conchita sedosa gigante / Pata de araña", cientifico: "Echeveria setosa", categoria: "cactus", imagen: "assets/images/conchitasedosagigante.png"},
    { especie: "Boca de tigre", cientifico: "Faucaria tigrina", categoria: "cactus", imagen: "assets/images/bocadetigre.png"},
    { especie: "Planta de hielo", cientifico: "Astridia velutina", categoria: "cactus", imagen: "assets/images/plantadehielo.png"},
    { especie: "Echeveria", cientifico: "Echeveria elegans", categoria: "cactus", imagen: "assets/images/echeveria.png"},
    { especie: "Aloe vera", cientifico: "Aloe vera", categoria: "cactus", imagen: "assets/images/aloevera.png"},
    { especie: "Planta antorcha", cientifico: "Aristaloe aristata", categoria: "cactus", imagen: "assets/images/plantaantorcha.png"},
    { especie: "Cactus catedral", cientifico: "Euphorbia trigona", categoria: "cactus", imagen: "assets/images/cactuscatedral.png"},
    { especie: "S. monducuru", cientifico: "Opuntia monacantha", categoria: "cactus", imagen: "assets/images/monducuru.png"},
    { especie: "Mazorca de maíz", cientifico: "Euphorbia mammillaris", categoria: "cactus", imagen: "assets/images/mazorcademaiz.png"},
    { especie: "Uña de señorita", cientifico: "Sempervivum calcareum", categoria: "cactus", imagen: "assets/images/uñadeseñorita.png"},
    { especie: "Topsy turvy", cientifico: "Echeveria runyonii", categoria: "cactus", imagen: "assets/images/topsyturvy.png"},
    { especie: "Haworthia", cientifico: "Haworthia coarctata", categoria: "cactus", imagen: "assets/images/haworthia.png"},
    { especie: "Planta pulpo o candelabro", cientifico: "Aloe arborescens", categoria: "cactus", imagen: "assets/images/candelabro.png"},
    { especie: "Cactus madre amorosa", cientifico: "Echinopsis tubiflora", categoria: "cactus", imagen: "assets/images/cactusmadreamorosa.png"},
    { especie: "Ala de ángel", cientifico: "Opuntia microdasys", categoria: "cactus", imagen: "assets/images/aladeangel.png"},
    { especie: "Alfiler de Eva", cientifico: "Austrocylindropuntia subulata", categoria: "cactus", imagen: "assets/images/alfilerdeeva.png"},
    { especie: "C. cresta de gallo", cientifico: "Sin nombre científico registrado", categoria: "cactus", imagen: "assets/images/crestadegallo.png"},
    { especie: "C. barba del viejo", cientifico: "Sin nombre científico registrado", categoria: "cactus", imagen: "assets/images/barbadelviejo.png"},
    { especie: "Nopal", cientifico: "Nopalea cochenillifera", categoria: "cactus", imagen: "assets/images/nopal.png"},
    { especie: "Orostachys", cientifico: "Orostachys", categoria: "cactus", imagen: "assets/images/orostachys.png"},
    { especie: "Ceropegia mixta", cientifico: "Ceropegia mixta", categoria: "cactus", imagen: "assets/images/ceropegiamixta.png"},
    { especie: "Sábila de agua", cientifico: "Haworthia cooperi var. pilifera", categoria: "cactus", imagen: "assets/images/sábiladeagua.png"},
    { especie: "Gongarillos", cientifico: "Aichryson domesticum", categoria: "cactus", imagen: "assets/images/gongarillos.png"},
    { especie: "Árbol de la abundancia", cientifico: "Portulacaria afra", categoria: "cactus", imagen: "assets/images/arboldelaabundancia.png"},
    { especie: "Delfín o punta de lanza / Rosario", cientifico: "Senecio kleiniiiformis", categoria: "cactus", imagen: "assets/images/delfin.png"},
    { especie: "Callisia", cientifico: "Callisia repens", categoria: "cactus", imagen: "assets/images/callisia.png"},
    { especie: "Jade rastrero", cientifico: "Sedum emarginatum", categoria: "cactus", imagen: "assets/images/jaderastrero.png"},
    { especie: "Pastel de risco", cientifico: "Aeonium tabuliforme", categoria: "cactus", imagen: "assets/images/pastelderisco.png"},
    { especie: "Orejas de Shrek", cientifico: "Crassula ovata 'Gollum'", categoria: "cactus", imagen: "assets/images/orejasdeshrek.png"},
    { especie: "Tarta de lima o empanaditas", cientifico: "Adromischus cristatus", categoria: "cactus", imagen: "assets/images/tartadelima.png"},
    { especie: "Garrita de oso", cientifico: "Cotyledon tomentosa", categoria: "cactus", imagen: "assets/images/garritadeoso.png"},
    { especie: "Árbol de jade", cientifico: "Crassula ovata", categoria: "cactus", imagen: "assets/images/árboldejade.png"},
    { especie: "Árbol de jade blanco gigante", cientifico: "Crassula arborescens", categoria: "cactus", imagen: "assets/images/árboldejadeblancogigante.png"},
    { especie: "Árbol de jade verde gigante", cientifico: "Crassula ovata 'Undulata'", categoria: "cactus", imagen: "assets/images/árboldejadeverdegigante.png"},
    { especie: "Cabeza de medusa", cientifico: "Euphorbia flanaganii", categoria: "cactus", imagen: "assets/images/cabezademedusa.png"},
    { especie: "Suculenta farfare", cientifico: "Sedeveria fanfare", categoria: "cactus", imagen: "assets/images/suculentafarfare.png"},
    { especie: "Escilia", cientifico: "Ledebouria socialis", categoria: "cactus", imagen: "assets/images/escilia.png"},
    { especie: "Bejeques", cientifico: "Aeonium leucoblefarum", categoria: "cactus", imagen: "assets/images/bejeques.png"},
    { especie: "Rosa negra / Siempre viva arbórea", cientifico: "Aeonium arboreum", categoria: "cactus", imagen: "assets/images/rosanegra.png"},
    { especie: "Siempre viva de la quebrada", cientifico: "Sedum clavatum", categoria: "cactus", imagen: "assets/images/siemprevivadelaquebrada.png"},
    { especie: "Collar de jade", cientifico: "Crassula rupestris", categoria: "cactus", imagen: "assets/images/collardejade.png"},
    { especie: "Crassula perforata variegado", cientifico: "Crassula perforata variegata", categoria: "cactus", imagen: "assets/images/crassulaperforatavariegado.png"},
    { especie: "Crassula pellucida", cientifico: "Crassula pellucida", categoria: "cactus", imagen: "assets/images/crassulapellucida.png"},
    { especie: "Uña de gato", cientifico: "Sin nombre científico registrado", categoria: "cactus", imagen: "assets/images/uñadegato.png"},
    { especie: "Pitahaya", cientifico: "Sin nombre científico registrado", categoria: "cactus", imagen: "assets/images/pitahaya.png"},
    { especie: "Cola de burro", cientifico: "Sedum burrito", categoria: "cactus", imagen: "assets/images/coladeburro.png"},
    { especie: "Sedeveria Harry", cientifico: "Sedeveria 'Harry Butterfield'", categoria: "cactus", imagen: "assets/images/sedeveriaharry.png"},
    { especie: "Rosa verde", cientifico: "Aeonium zwartkop", categoria: "cactus", imagen: "assets/images/rosaverde.png"},

    // === PLANTAS DE SOMBRA ===
    { especie: "Hiedra", cientifico: "Hedera helix", categoria: "sombra", imagen: "assets/images/hiedra.png"},
    { especie: "Collar de rubí", cientifico: "Othonna capensis", categoria: "sombra", imagen: "assets/images/collarderubí.png"},
    { especie: "Collar de rubí gigante", cientifico: "Othonna capensis 'Rubra'", categoria: "sombra", imagen: "assets/images/collarderubígigante.png"},
    { especie: "Helecho espada", cientifico: "Nephrolepis cordifolia", categoria: "sombra", imagen: "assets/images/helechoespada.png"},
    { especie: "Llama plata", cientifico: "Pilea glauca", categoria: "sombra", imagen: "assets/images/llamaplata.png"},
    { especie: "Violeta de los alpes", cientifico: "Cyclamen persicum", categoria: "sombra", imagen: "assets/images/violetadelosalpes.png"},
    { especie: "Peperonia", cientifico: "Peperomia polybotrya", categoria: "sombra", imagen: "assets/images/peperonia.png"},
    { especie: "Sebrina morada", cientifico: "Tradescantia pallida", categoria: "sombra", imagen: "assets/images/sebrinamorada.png"},
    { especie: "Sebrina", cientifico: "Tradescantia zebrina", categoria: "sombra", imagen: "assets/images/sebrina.png"},
    { especie: "Ciprés limón", cientifico: "Cupressus macrocarpa", categoria: "sombra", imagen: "assets/images/cipréslimón.png"},
    { especie: "Ciprés vela", cientifico: "Cupressus sempervirens", categoria: "sombra", imagen: "assets/images/ciprésvela.png"},
    { especie: "Esparraguillo", cientifico: "Asparagus densiflorus", categoria: "sombra", imagen: "assets/images/esparraguillo.png"},
    { especie: "Esparraguillo gigante", cientifico: "Asparagus densiflorus 'Myersii'", categoria: "sombra", imagen: "assets/images/esparraguillogigante.png"},
    { especie: "Lengua de la suegra enana", cientifico: "Sansevieria trifasciata 'Hahnii'", categoria: "sombra", imagen: "assets/images/lenguadelasuegraenana.png"},
    { especie: "Calas verdes", cientifico: "Zantedeschia aethiopica", categoria: "sombra", imagen: "assets/images/calasverdes.png"},

    // === ÁRBOLES ===
    { especie: "Pino radiata", cientifico: "Pinus radiata", categoria: "arboles", imagen: "assets/images/pinoradiata.png"},
    { especie: "Cedro andino", cientifico: "Cedrela angustifolia", categoria: "arboles", imagen: "assets/images/cedroandino.png"},
    { especie: "Queuña", cientifico: "Polylepis incana", categoria: "arboles", imagen: "assets/images/queuña.png"},
    { especie: "Chachacoma", cientifico: "Escallonia resinosa", categoria: "arboles", imagen: "assets/images/chachacoma.png"},
    { especie: "Molle", cientifico: "Schinus molle", categoria: "arboles", imagen: "assets/images/molle.png"},
    { especie: "Huaranhuay", cientifico: "Tecoma stans", categoria: "arboles", imagen: "assets/images/huaranhuay.png"},

    // === FRUTALES ===
    { especie: "Durazno", cientifico: "INJERTADO", categoria: "frutales", imagen: "assets/images/durazno.png"},
    { especie: "Manzana", cientifico: "INJERTADO", categoria: "frutales", imagen: "assets/images/manzana.png"},
    { especie: "Pepino dulce", cientifico: "Solanum muricatum", categoria: "frutales", imagen: "assets/images/pepinodulce.png"},
    { especie: "Higo", cientifico: "Ficus carica", categoria: "frutales", imagen: "assets/images/higos.png"},
    { especie: "Cerezo", cientifico: "INJERTADO", categoria: "frutales", imagen: "assets/images/cerezo.png"},
    { especie: "Pera", cientifico: "INJERTADO", categoria: "frutales", imagen: "assets/images/pera.png"}
  ];

  // Navegación entre pestañas principales y secciones de detalle
  function switchTab(targetId) {
    // Desactivar todos los botones e inactivar secciones
    tabBtns.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Determinar qué pestaña lateral debe activarse
    let sidebarActiveId = targetId;
    const detailedMedicalSections = ['aloe-vera', 'calendula', 'hiedra', 'lavanda', 'toronjil', 'chile', 'higo'];
    
    if (detailedMedicalSections.includes(targetId)) {
      sidebarActiveId = 'uso-medico';
    }

    const activeBtn = document.querySelector(`.tab-btn[data-target="${sidebarActiveId}"]`);
    const activeSection = document.getElementById(targetId);

    if (activeBtn) activeBtn.classList.add('active');
    if (activeSection) {
      activeSection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Registrar listeners de clics en la barra lateral
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      switchTab(targetId);
    });
  });

  // Exponer navegación globalmente para poder usarla en onclicks
  window.navigateToPlant = function(plantId) {
    switchTab(plantId);
  };

  // --- Lógica del Catálogo de Vivero ---
  let activeFilter = 'todas';
  let activeSearch = '';

  function renderVivero() {
    if (!viveroGrid) return;
    viveroGrid.innerHTML = '';

    const filtered = viveroPlants.filter(plant => {
      const matchesCategory = activeFilter === 'todas' || plant.categoria === activeFilter;
      const matchesSearch = plant.especie.toLowerCase().includes(activeSearch) || 
                            plant.cientifico.toLowerCase().includes(activeSearch);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      viveroGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
          <span style="font-size: 2.5rem; display: block; margin-bottom: 1rem;">🍃</span>
          <p style="font-size: 1.1rem; font-weight: 500;">No se encontraron plantas que coincidan con tu búsqueda.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(plant => {
      const card = document.createElement('div');
      card.className = 'vivero-card';

      let badgeClass = 'badge-semisombra';
      let categoryText = 'Semisombra / Sol';
      
      switch (plant.categoria) {
        case 'cactus':
          badgeClass = 'badge-cactus';
          categoryText = 'Cactus / Suculenta';
          break;
        case 'sombra':
          badgeClass = 'badge-sombra';
          categoryText = 'Sombra';
          break;
        case 'arboles':
          badgeClass = 'badge-arboles';
          categoryText = 'Árbol';
          break;
        case 'frutales':
          badgeClass = 'badge-frutales';
          categoryText = 'Frutal';
          break;
      }

      // Determinar la imagen a mostrar (priorizando una imagen personalizada si existe)
      let imageSrc = plant.imagen || `assets/images/cat_${plant.categoria}.png`;
      
      // Fallback para las plantas médicas locales si no se ha definido una imagen personalizada
      if (!plant.imagen) {
        const specificImages = {
          "aloe vera": "assets/images/aloe_vera.png",
          "caléndula": "assets/images/calendula.png",
          "hiedra": "assets/images/hiedra.png",
          "toronjil": "assets/images/toronjil.png",
          "lavanda": "assets/images/lavanda.png",
          "chiles": "assets/images/chile.png",
          "higo": "assets/images/higo.png"
        };

        const lowerEspecie = plant.especie.toLowerCase();
        if (specificImages[lowerEspecie]) {
          imageSrc = specificImages[lowerEspecie];
        }
      }

      card.innerHTML = `
        <div class="vivero-card-image">
          <img src="${imageSrc}" alt="${plant.especie}">
        </div>
        <div class="vivero-card-content">
          <div class="vivero-card-info">
            <h3>${plant.especie}</h3>
            <span class="scientific">${plant.cientifico}</span>
          </div>
          <div class="vivero-card-meta">
            <span class="vivero-badge ${badgeClass}">${categoryText}</span>
          </div>
        </div>
      `;
      viveroGrid.appendChild(card);
    });
  }

  function calculateStats() {
    const counts = {
      todas: viveroPlants.length,
      semisombra: viveroPlants.filter(p => p.categoria === 'semisombra').length,
      cactus: viveroPlants.filter(p => p.categoria === 'cactus').length,
      sombra: viveroPlants.filter(p => p.categoria === 'sombra').length,
      arboles: viveroPlants.filter(p => p.categoria === 'arboles').length,
      frutales: viveroPlants.filter(p => p.categoria === 'frutales').length
    };

    Object.keys(counts).forEach(key => {
      const el = document.getElementById(`count-${key}`);
      if (el) el.textContent = counts[key];
    });
  }

  function changeFilter(filterValue) {
    activeFilter = filterValue;

    // Actualizar píldoras de filtro
    filterPills.forEach(pill => {
      if (pill.getAttribute('data-filter') === filterValue) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Actualizar tarjetas de estadísticas
    statPills.forEach(pill => {
      if (pill.getAttribute('data-cat') === filterValue) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    renderVivero();
  }

  // Clics en los filtros de píldoras e indicadores estadísticos
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      changeFilter(pill.getAttribute('data-filter'));
    });
  });

  statPills.forEach(pill => {
    pill.addEventListener('click', () => {
      changeFilter(pill.getAttribute('data-cat'));
    });
  });

  // Búsqueda en el input interno del vivero
  if (viveroSearch) {
    viveroSearch.addEventListener('input', (e) => {
      activeSearch = e.target.value.toLowerCase().trim();
      renderVivero();
    });
  }

  // --- Buscador Global del Encabezado (Header) ---
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      // Si la sección activa es Vivero
      const isViveroActive = document.getElementById('vivero').classList.contains('active');
      
      if (isViveroActive) {
        activeSearch = query;
        if (viveroSearch) viveroSearch.value = e.target.value;
        renderVivero();
      } else {
        // Filtrar las tarjetas de la sección Uso Médico
        const medicalCards = document.querySelectorAll('#uso-medico .plant-card-link');
        medicalCards.forEach(card => {
          const title = card.querySelector('h3').textContent.toLowerCase();
          const scientific = card.querySelector('p').textContent.toLowerCase();
          if (title.includes(query) || scientific.includes(query)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  }

  // --- Soporte para Enlaces Directos vía Hash (ej: index.html#aloe-vera) ---
  function checkUrlHash() {
    const hash = window.location.hash.substring(1); // obtener el ID sin el '#'
    if (hash) {
      const targetSection = document.getElementById(hash);
      if (targetSection && targetSection.classList.contains('plant-section')) {
        switchTab(hash);
      }
    }
  }

  // Inicializar vivero
  calculateStats();
  renderVivero();

  // Comprobar el hash al cargar la página y cuando cambie
  checkUrlHash();
  window.addEventListener('hashchange', checkUrlHash);
});
