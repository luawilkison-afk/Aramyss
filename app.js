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
    { especie: "Geranio rey", cientifico: "Pelargonium grandiflorum", categoria: "semisombra" },
    { especie: "Floripondio", cientifico: "Sin nombre científico registrado", categoria: "semisombra" },
    { especie: "Chiflera", cientifico: "Schefflera arboricola", categoria: "semisombra" },
    { especie: "Dormilona", cientifico: "Gazania", categoria: "semisombra" },
    { especie: "Geranios", cientifico: "Geranium", categoria: "semisombra" },
    { especie: "Cucardas", cientifico: "Hibiscus rosa-sinensis", categoria: "semisombra" },
    { especie: "Caléndula", cientifico: "Calendula officinalis", categoria: "semisombra" },
    { especie: "Aster de escocia", cientifico: "Symphyotrichum novi-belgii", categoria: "semisombra" },
    { especie: "Brillantisima", cientifico: "Coprosma repens", categoria: "semisombra" },
    { especie: "Hipoestes", cientifico: "Hypoestes phyllostachya", categoria: "semisombra" },
    { especie: "Gitanas o cóleo", cientifico: "Coleus scutellarioides", categoria: "semisombra" },
    { especie: "Iresine / Sanguinaria", cientifico: "Iresine diffusa f. herbstii", categoria: "semisombra" },
    { especie: "Cirtodeira", cientifico: "Episcia cupreata", categoria: "semisombra" },
    { especie: "Ortiga muerta", cientifico: "Lamium maculatum", categoria: "semisombra" },
    { especie: "Padoja roja", cientifico: "Sin nombre científico registrado", categoria: "semisombra" },
    { especie: "Margarita leñosa", cientifico: "Argyranthemum frutescens", categoria: "semisombra" },
    { especie: "Margarita africana", cientifico: "Osteospermum ecklonis", categoria: "semisombra" },
    { especie: "Pompones", cientifico: "Bellis perennis", categoria: "semisombra" },
    { especie: "Primaveras", cientifico: "Primula acaulis", categoria: "semisombra" },
    { especie: "Campana de arrastre", cientifico: "Campanula poscharskyana", categoria: "semisombra" },
    { especie: "Violetas africanas", cientifico: "Streptocarpus", categoria: "semisombra" },
    { especie: "Clavel", cientifico: "Dianthus caryophyllus", categoria: "semisombra" },
    { especie: "Fosforito", cientifico: "Cuphea ignea", categoria: "semisombra" },
    { especie: "Campanilla de tussock", cientifico: "Campanula carpatica", categoria: "semisombra" },
    { especie: "Fresa", cientifico: "Fragaria ananassa", categoria: "semisombra" },
    { especie: "Flor de nácar", cientifico: "Begonia cucullata", categoria: "semisombra" },
    { especie: "Begonia ala de ángel", cientifico: "Begonia maculata", categoria: "semisombra" },
    { especie: "Verbenas", cientifico: "Glandularia x hybrida", categoria: "semisombra" },
    { especie: "Bergenia", cientifico: "Bergenia crassifolia", categoria: "semisombra" },
    { especie: "Rosa miniatura", cientifico: "Rosa hybrida", categoria: "semisombra" },
    { especie: "Lantana", cientifico: "Lantana camara", categoria: "semisombra" },
    { especie: "Hierbabuena / Menta", cientifico: "Mentha spicata", categoria: "semisombra" },
    { especie: "Orégano", cientifico: "Origanum vulgare", categoria: "semisombra" },
    { especie: "Menta de agua", cientifico: "Mentha aquatica", categoria: "semisombra" },
    { especie: "Romero", cientifico: "Salvia rosmarinus", categoria: "semisombra" },
    { especie: "Toronjil", cientifico: "Melissa officinalis", categoria: "semisombra" },
    { especie: "Cedroncillo", cientifico: "Aloysia citrodora", categoria: "semisombra" },
    { especie: "Lavanda", cientifico: "Lavandula angustifolia", categoria: "semisombra" },
    { especie: "Ruda", cientifico: "Ruta graveolens", categoria: "semisombra" },
    { especie: "Boca de sapo", cientifico: "Antirrhinum majus", categoria: "semisombra" },
    { especie: "Cantu", cientifico: "Cantua buxifolia", categoria: "semisombra" },
    { especie: "Chiles", cientifico: "Capsicum annuum", categoria: "semisombra" },
    { especie: "Pepino melón", cientifico: "Solanum muricatum", categoria: "semisombra" },
    { especie: "Higo", cientifico: "Ficus carica", categoria: "semisombra" },
    { especie: "Ají amarillo", cientifico: "Capsicum baccatum", categoria: "semisombra" },
    { especie: "Naranjitas de adorno", cientifico: "Solanum pseudocapsicum", categoria: "semisombra" },
    { especie: "Pariguanas o hierba de mirto", cientifico: "Salvia microphylla", categoria: "semisombra" },
    { especie: "Trabajadora", cientifico: "Impatiens balsamina", categoria: "semisombra" },
    { especie: "Pico de loro", cientifico: "Impatiens niamniamensis", categoria: "semisombra" },
    { especie: "Farol chino o japonés", cientifico: "Abutilon pictum", categoria: "semisombra" },
    { especie: "Crisantemos", cientifico: "Chrysanthemum x morifolium", categoria: "semisombra" },
    { especie: "Agapanto africano", cientifico: "Agapanthus praecox", categoria: "semisombra" },
    { especie: "Tritoma o antorcha", cientifico: "Kniphofia uvaria", categoria: "semisombra" },
    { especie: "Palmera yuca gigante", cientifico: "Yucca gigantea", categoria: "semisombra" },
    { especie: "Jacaranda", cientifico: "Jacaranda mimosifolia", categoria: "semisombra" },
    { especie: "Cantu enano", cientifico: "Sin nombre científico registrado", categoria: "semisombra" },

    // === CACTUS Y SUCULENTAS ===
    { especie: "Kalanchoe", cientifico: "Kalanchoe blossfeldiana", categoria: "cactus" },
    { especie: "Conchita sedosa gigante / Pata de araña", cientifico: "Echeveria setosa", categoria: "cactus" },
    { especie: "Boca de tigre", cientifico: "Faucaria tigrina", categoria: "cactus" },
    { especie: "Planta de hielo", cientifico: "Astridia velutina", categoria: "cactus" },
    { especie: "Echeveria", cientifico: "Echeveria elegans", categoria: "cactus" },
    { especie: "Aloe vera", cientifico: "Aloe vera", categoria: "cactus" },
    { especie: "Planta antorcha", cientifico: "Aristaloe aristata", categoria: "cactus" },
    { especie: "Cactus catedral", cientifico: "Euphorbia trigona", categoria: "cactus" },
    { especie: "S. monducuru", cientifico: "Opuntia monacantha", categoria: "cactus" },
    { especie: "Mazorca de maíz", cientifico: "Euphorbia mammillaris", categoria: "cactus" },
    { especie: "Uña de señorita", cientifico: "Sempervivum calcareum", categoria: "cactus" },
    { especie: "Topsy turvy", cientifico: "Echeveria runyonii", categoria: "cactus" },
    { especie: "Haworthia", cientifico: "Haworthia coarctata", categoria: "cactus" },
    { especie: "Planta pulpo o candelabro", cientifico: "Aloe arborescens", categoria: "cactus" },
    { especie: "Cactus madre amorosa", cientifico: "Echinopsis tubiflora", categoria: "cactus" },
    { especie: "Ala de ángel", cientifico: "Opuntia microdasys", categoria: "cactus" },
    { especie: "Alfiler de Eva", cientifico: "Austrocylindropuntia subulata", categoria: "cactus" },
    { especie: "C. cresta de gallo", cientifico: "Sin nombre científico registrado", categoria: "cactus" },
    { especie: "C. barba del viejo", cientifico: "Sin nombre científico registrado", categoria: "cactus" },
    { especie: "Nopal", cientifico: "Nopalea cochenillifera", categoria: "cactus" },
    { especie: "Orostachys", cientifico: "Orostachys", categoria: "cactus" },
    { especie: "Ceropegia mixta", cientifico: "Ceropegia mixta", categoria: "cactus" },
    { especie: "Sábila de agua", cientifico: "Haworthia cooperi var. pilifera", categoria: "cactus" },
    { especie: "Gongarillos", cientifico: "Aichryson domesticum", categoria: "cactus" },
    { especie: "Árbol de la abundancia", cientifico: "Portulacaria afra", categoria: "cactus" },
    { especie: "Delfín o punta de lanza / Rosario", cientifico: "Senecio kleiniiiformis", categoria: "cactus" },
    { especie: "Callisia", cientifico: "Callisia repens", categoria: "cactus" },
    { especie: "Jade rastrero", cientifico: "Sedum emarginatum", categoria: "cactus" },
    { especie: "Pastel de risco", cientifico: "Aeonium tabuliforme", categoria: "cactus" },
    { especie: "Orejas de Shrek", cientifico: "Crassula ovata 'Gollum'", categoria: "cactus" },
    { especie: "Tarta de lima o empanaditas", cientifico: "Adromischus cristatus", categoria: "cactus" },
    { especie: "Garrita de oso", cientifico: "Cotyledon tomentosa", categoria: "cactus" },
    { especie: "Árbol de jade", cientifico: "Crassula ovata", categoria: "cactus" },
    { especie: "Árbol de jade blanco gigante", cientifico: "Crassula arborescens", categoria: "cactus" },
    { especie: "Árbol de jade verde gigante", cientifico: "Crassula ovata 'Undulata'", categoria: "cactus" },
    { especie: "Cabeza de medusa", cientifico: "Euphorbia flanaganii", categoria: "cactus" },
    { especie: "Suculenta farfare", cientifico: "Sedeveria fanfare", categoria: "cactus" },
    { especie: "Escilia", cientifico: "Ledebouria socialis", categoria: "cactus" },
    { especie: "Bejeques", cientifico: "Aeonium leucoblefarum", categoria: "cactus" },
    { especie: "Rosa negra / Siempre viva arbórea", cientifico: "Aeonium arboreum", categoria: "cactus" },
    { especie: "Siempre viva de la quebrada", cientifico: "Sedum clavatum", categoria: "cactus" },
    { especie: "Collar de jade", cientifico: "Crassula rupestris", categoria: "cactus" },
    { especie: "Crassula perforata variegado", cientifico: "Crassula perforata variegata", categoria: "cactus" },
    { especie: "Crassula pellucida", cientifico: "Crassula pellucida", categoria: "cactus" },
    { especie: "Uña de gato", cientifico: "Sin nombre científico registrado", categoria: "cactus" },
    { especie: "Pitahaya", cientifico: "Sin nombre científico registrado", categoria: "cactus" },
    { especie: "Cola de burro", cientifico: "Sedum burrito", categoria: "cactus" },
    { especie: "Sedeveria Harry", cientifico: "Sedeveria 'Harry Butterfield'", categoria: "cactus" },
    { especie: "Rosa verde", cientifico: "Aeonium zwartkop", categoria: "cactus" },

    // === PLANTAS DE SOMBRA ===
    { especie: "Hiedra", cientifico: "Hedera helix", categoria: "sombra" },
    { especie: "Collar de rubí", cientifico: "Othonna capensis", categoria: "sombra" },
    { especie: "Collar de rubí gigante", cientifico: "Othonna capensis 'Rubra'", categoria: "sombra" },
    { especie: "Helecho espada", cientifico: "Nephrolepis cordifolia", categoria: "sombra" },
    { especie: "Llama plata", cientifico: "Pilea glauca", categoria: "sombra" },
    { especie: "Violeta de los alpes", cientifico: "Cyclamen persicum", categoria: "sombra" },
    { especie: "Peperonia", cientifico: "Peperomia polybotrya", categoria: "sombra" },
    { especie: "Sebrina morada", cientifico: "Tradescantia pallida", categoria: "sombra" },
    { especie: "Sebrina", cientifico: "Tradescantia zebrina", categoria: "sombra" },
    { especie: "Ciprés limón", cientifico: "Cupressus macrocarpa", categoria: "sombra" },
    { especie: "Ciprés vela", cientifico: "Cupressus sempervirens", categoria: "sombra" },
    { especie: "Esparraguillo", cientifico: "Asparagus densiflorus", categoria: "sombra" },
    { especie: "Esparraguillo gigante", cientifico: "Asparagus densiflorus 'Myersii'", categoria: "sombra" },
    { especie: "Lengua de la suegra enana", cientifico: "Sansevieria trifasciata 'Hahnii'", categoria: "sombra" },
    { especie: "Calas verdes", cientifico: "Zantedeschia aethiopica", categoria: "sombra" },

    // === ÁRBOLES ===
    { especie: "Pino radiata", cientifico: "Pinus radiata", categoria: "arboles" },
    { especie: "Cedro andino", cientifico: "Cedrela angustifolia", categoria: "arboles" },
    { especie: "Queuña", cientifico: "Polylepis incana", categoria: "arboles" },
    { especie: "Chachacoma", cientifico: "Escallonia resinosa", categoria: "arboles" },
    { especie: "Molle", cientifico: "Schinus molle", categoria: "arboles" },
    { especie: "Huaranhuay", cientifico: "Tecoma stans", categoria: "arboles" },

    // === FRUTALES ===
    { especie: "Durazno", cientifico: "INJERTADO", categoria: "frutales" },
    { especie: "Manzana", cientifico: "INJERTADO", categoria: "frutales" },
    { especie: "Pepino dulce", cientifico: "Solanum muricatum", categoria: "frutales" },
    { especie: "Higo", cientifico: "Ficus carica", categoria: "frutales" },
    { especie: "Cerezo", cientifico: "INJERTADO", categoria: "frutales" },
    { especie: "Pera", cientifico: "INJERTADO", categoria: "frutales" }
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

  // Inicializar vivero
  calculateStats();
  renderVivero();
});
