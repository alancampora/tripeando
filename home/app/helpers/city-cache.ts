interface PlaceRecommendation {
	name: string;
	description: string;
	googleLink: string;
}

interface CityRecommendationInfo {
	name: string;
	history: string;
	places: PlaceRecommendation[];
}

interface CityRecommendationData {
	[city: string]: CityRecommendationInfo;
}

export function getCityRecommendationInfo(
	key: string,
): CityRecommendationInfo | null {
	return cityData[key.toLowerCase() as keyof CityRecommendationData];
}

const cityData: CityRecommendationData = {
	heidelberg: {
		name: 'Heidelberg',
		history:
			'Heidelberg es una ciudad histórica ubicada en el valle del río Neckar en el suroeste de Alemania. Es conocida por su famoso castillo y su encantador casco antiguo.',
		places: [
			{
				name: 'Castillo de Heidelberg',
				description:
					'El Castillo de Heidelberg es una impresionante fortaleza que se alza sobre la ciudad y ofrece vistas panorámicas del río Neckar y los alrededores. Es uno de los castillos más visitados en Alemania.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Castillo+de+Heidelberg',
			},
			{
				name: 'Puente Viejo',
				description:
					'El Puente Viejo, también conocido como Karl Theodor Bridge, es un puente histórico sobre el río Neckar y un símbolo de la ciudad. Ofrece vistas espectaculares del río y del casco antiguo de Heidelberg.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Puente+Viejo+Heidelberg',
			},
			{
				name: 'Plaza del Mercado',
				description:
					'La Plaza del Mercado, o Marktplatz en alemán, es el corazón del casco antiguo de Heidelberg. Está rodeada de edificios históricos y es un lugar perfecto para disfrutar de un café o hacer compras.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Plaza+del+Mercado+Heidelberg',
			},
			{
				name: 'Jardín Botánico de la Universidad de Heidelberg',
				description:
					'El Jardín Botánico de la Universidad de Heidelberg es un lugar tranquilo y hermoso para pasear y disfrutar de una gran variedad de plantas y flores. Es uno de los jardines botánicos más antiguos de Alemania.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Jardín+Botánico+de+la+Universidad+de+Heidelberg',
			},
			{
				name: 'Museo Kurpfälzisches',
				description:
					'El Museo Kurpfälzisches es uno de los museos más importantes de Heidelberg. Exhibe una fascinante colección de arte y objetos históricos relacionados con la región de Palatinado.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Museo+Kurpfälzisches+Heidelberg',
			},
			{
				name: 'Funicular de Heidelberg',
				description:
					'El Funicular de Heidelberg es una forma única de llegar a la colina del Castillo de Heidelberg. Ofrece vistas panorámicas de la ciudad y es una experiencia emocionante.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Funicular+de+Heidelberg',
			},
			{
				name: 'Universidad de Heidelberg',
				description:
					'La Universidad de Heidelberg es una de las universidades más antiguas de Alemania. Su campus y edificios históricos son dignos de explorar.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Universidad+de+Heidelberg',
			},
			{
				name: 'Torre del Reloj',
				description:
					'La Torre del Reloj es una antigua torre de vigilancia ubicada cerca de la Plaza del Mercado. Es un símbolo importante del casco antiguo de Heidelberg.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Torre+del+Reloj+Heidelberg',
			},
		],
	},
	munich: {
		name: 'Munich',
		history:
			'Munich, la capital de Baviera en el sur de Alemania, es conocida por su rica historia, su arquitectura impresionante y su animada cultura.',
		places: [
			{
				name: 'Marienplatz',
				description:
					'Marienplatz es la plaza principal de Munich y el corazón de la ciudad. Está rodeada de edificios históricos, incluido el Ayuntamiento y la Columna de Santa María.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Marienplatz+Munich',
			},
			{
				name: 'Hofbräuhaus',
				description:
					'El Hofbräuhaus es una famosa cervecería bávara en Munich, fundada en 1589. Es un lugar popular para probar la cerveza local y disfrutar de la música tradicional.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Hofbräuhaus+Munich',
			},
			{
				name: 'Jardín Inglés',
				description:
					'El Jardín Inglés es uno de los parques urbanos más grandes del mundo y un oasis verde en el corazón de Munich. Es perfecto para pasear, hacer picnic y disfrutar de actividades al aire libre.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Jardín+Inglés+Munich',
			},
			{
				name: 'Palacio de Nymphenburg',
				description:
					'El Palacio de Nymphenburg es una residencia de verano barroca de la familia real de Baviera. Sus jardines son impresionantes y albergan varios museos y galerías.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Palacio+de+Nymphenburg+Munich',
			},
			{
				name: 'Deutsches Museum',
				description:
					'El Deutsches Museum es el museo de ciencia y tecnología más grande del mundo. Ofrece exhibiciones fascinantes sobre temas como la energía, la aviación, la tecnología espacial y mucho más.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Deutsches+Museum+Munich',
			},
			{
				name: 'Olympiapark',
				description:
					'El Olympiapark fue construido para los Juegos Olímpicos de Verano de 1972. Hoy en día, es un parque público popular que alberga conciertos, eventos deportivos y el famoso BMW Welt.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Olympiapark+Munich',
			},
			{
				name: 'Viktualienmarkt',
				description:
					'El Viktualienmarkt es un mercado al aire libre en el centro de Munich, donde puedes encontrar una gran variedad de productos frescos, comida local y souvenirs.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Viktualienmarkt+Munich',
			},
			{
				name: 'Residenz München',
				description:
					'La Residencia de Munich es el antiguo palacio real de los reyes de Baviera. Es uno de los palacios urbanos más grandes de Europa y alberga museos, salas de recepción y jardines.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Residenz+München',
			},
			{
				name: 'Cervecería Augustiner',
				description:
					'La Cervecería Augustiner es una de las cervecerías más antiguas de Munich, fundada en 1328. Ofrece cerveza de barril de alta calidad y comida bávara tradicional.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Cervecería+Augustiner+Munich',
			},
			{
				name: 'Pinakothek der Moderne',
				description:
					'La Pinacoteca de Arte Moderno es uno de los museos más importantes de arte moderno y contemporáneo en Munich. Alberga obras de artistas como Pablo Picasso, Andy Warhol y Gerhard Richter.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Pinakothek+der+Moderne+Munich',
			},
		],
	},

	innsbruck: {
		name: 'Innsbruck',
		history:
			'Innsbruck es la capital del estado de Tirol en Austria, ubicada en el valle del río Inn. Es conocida por su impresionante paisaje alpino, su rica historia y su arquitectura barroca.',
		places: [
			{
				name: 'Tejado de Oro',
				description:
					'El Tejado de Oro es uno de los monumentos más famosos de Innsbruck. Está situado en el corazón del casco antiguo y ofrece vistas panorámicas de la ciudad y las montañas circundantes.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Tejado+de+Oro+Innsbruck',
			},
			{
				name: 'Palacio Imperial de Hofburg',
				description:
					'El Palacio Imperial de Hofburg es un magnífico palacio renacentista que una vez fue la residencia de los gobernantes de Tirol. Hoy en día alberga varios museos y salas de exposiciones.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Palacio+Imperial+de+Hofburg+Innsbruck',
			},
			{
				name: 'Bergisel',
				description:
					'El Bergisel es una colina que ofrece vistas panorámicas de Innsbruck y las montañas circundantes. En la cima se encuentra el trampolín de salto de esquí Bergisel, un importante sitio deportivo.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Bergisel+Innsbruck',
			},
			{
				name: 'Catedral de San Jacobo',
				description:
					'La Catedral de San Jacobo es una impresionante iglesia barroca ubicada en el centro de Innsbruck. Su interior está decorado con pinturas y esculturas de renombrados artistas.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Catedral+de+San+Jacobo+Innsbruck',
			},
			{
				name: 'Alpes de Nordkette',
				description:
					'Los Alpes de Nordkette son una cadena montañosa situada al norte de Innsbruck. Son un destino popular para practicar senderismo, escalada y esquí, y ofrecen impresionantes vistas de la ciudad y el valle del río Inn.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Alpes+de+Nordkette+Innsbruck',
			},
			{
				name: 'Jardín Botánico de la Universidad de Innsbruck',
				description:
					'El Jardín Botánico de la Universidad de Innsbruck es un oasis verde en el centro de la ciudad. Alberga una amplia variedad de plantas alpinas y especies exóticas.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Jardín+Botánico+de+la+Universidad+de+Innsbruck',
			},
			{
				name: 'Museo de Tirol',
				description:
					'El Museo de Tirol ofrece una visión fascinante de la historia, la cultura y la naturaleza de la región de Tirol. Cuenta con exhibiciones interactivas y colecciones de artefactos históricos.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Museo+de+Tirol+Innsbruck',
			},
		],
	},

	verona: {
		name: 'Verona',
		history:
			'Verona es una hermosa ciudad ubicada en el noreste de Italia, famosa por su rica historia, su arquitectura medieval y su asociación con la obra de Shakespeare, Romeo y Julieta.',
		places: [
			{
				name: 'Arena de Verona',
				description:
					'La Arena de Verona es un antiguo anfiteatro romano ubicado en el centro de la ciudad. Es uno de los anfiteatros mejor conservados del mundo y alberga espectáculos de ópera y conciertos durante el verano.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Arena+de+Verona',
			},
			{
				name: 'Casa de Julieta',
				description:
					'La Casa de Julieta es un edificio medieval asociado con el legendario personaje de Shakespeare, Julieta Capuleto. Es un destino popular para los amantes y los admiradores de la obra de teatro.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Casa+de+Julieta+Verona',
			},
			{
				name: 'Piazza delle Erbe',
				description:
					'Piazza delle Erbe es una encantadora plaza en el centro de Verona, rodeada de hermosos edificios históricos y un mercado de productos frescos. Es un lugar perfecto para pasear y disfrutar del ambiente.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Piazza+delle+Erbe+Verona',
			},
			{
				name: 'Castelvecchio',
				description:
					'Castelvecchio es un imponente castillo medieval situado en la orilla del río Adige. Hoy en día alberga un museo que exhibe una impresionante colección de arte medieval y renacentista.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Castelvecchio+Verona',
			},
			{
				name: 'Ponte Pietra',
				description:
					'Ponte Pietra es un antiguo puente romano que cruza el río Adige. Es uno de los puentes más antiguos y pintorescos de Verona, ofreciendo vistas espectaculares de la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Ponte+Pietra+Verona',
			},
			{
				name: 'Torre dei Lamberti',
				description:
					'La Torre dei Lamberti es una torre medieval que ofrece vistas panorámicas de Verona desde su cima. Es un punto de referencia importante en el horizonte de la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Torre+dei+Lamberti+Verona',
			},
			{
				name: 'Basilica di San Zeno Maggiore',
				description:
					'La Basilica di San Zeno Maggiore es una impresionante iglesia románica dedicada a San Zeno, el patrón de Verona. Su fachada y sus frescos medievales son impresionantes.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Basilica+di+San+Zeno+Maggiore+Verona',
			},
		],
	},
	venecia: {
		name: 'Venecia',
		history:
			'Venecia es una ciudad única en el noreste de Italia, famosa por sus canales, su arquitectura renacentista y su rica historia como una importante potencia comercial durante la Edad Media y el Renacimiento.',
		places: [
			{
				name: 'Piazza San Marco',
				description:
					'Piazza San Marco es la plaza principal de Venecia y el centro de la vida pública de la ciudad. Está rodeada por algunos de los edificios más emblemáticos de Venecia, incluida la Basílica de San Marcos y el Campanario de San Marcos.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Piazza+San+Marco+Venecia',
			},
			{
				name: 'Canal Grande',
				description:
					'El Canal Grande es la principal vía fluvial de Venecia, que serpentea a través de la ciudad y está bordeada por impresionantes palacios renacentistas. Un paseo en góndola por el Canal Grande es una experiencia inolvidable.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Canal+Grande+Venecia',
			},
			{
				name: 'Puente de Rialto',
				description:
					'El Puente de Rialto es uno de los puentes más famosos de Venecia y cruza el Canal Grande. Es un punto de referencia icónico de la ciudad y un lugar popular para disfrutar de las vistas.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Puente+de+Rialto+Venecia',
			},
			{
				name: 'Palacio Ducal',
				description:
					'El Palacio Ducal es un impresionante palacio gótico que fue la residencia de los gobernantes de Venecia durante siglos. Hoy en día, es un museo que exhibe arte y artefactos históricos.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Palacio+Ducal+Venecia',
			},
			{
				name: 'Basílica de San Marcos',
				description:
					'La Basílica de San Marcos es uno de los ejemplos más impresionantes de arquitectura bizantina en el mundo. Su interior está decorado con mosaicos dorados y obras de arte sagrado.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Basílica+de+San+Marcos+Venecia',
			},
			{
				name: 'Murano',
				description:
					'Murano es una isla en la laguna de Venecia famosa por su tradición de fabricación de vidrio. Es un lugar fascinante para visitar talleres de vidrio y comprar hermosas piezas de vidrio soplado.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Murano+Venecia',
			},
			{
				name: 'Burano',
				description:
					'Burano es una pintoresca isla en la laguna de Venecia conocida por sus coloridas casas y encajes tradicionales. Es un destino popular para pasear y disfrutar de la auténtica vida isleña veneciana.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Burano+Venecia',
			},
		],
	},

	firenze: {
		name: 'Florencia',
		history:
			'Florencia es una ciudad ubicada en el corazón de la región de la Toscana en Italia, famosa por su arte renacentista, su arquitectura histórica y su rica historia como centro cultural y económico durante el Renacimiento.',
		places: [
			{
				name: 'Duomo de Florencia',
				description:
					'El Duomo de Florencia, oficialmente conocido como la Catedral de Santa María del Fiore, es una impresionante catedral gótica con una cúpula icónica diseñada por Brunelleschi. Es un símbolo emblemático de la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Duomo+de+Florencia',
			},
			{
				name: 'Ponte Vecchio',
				description:
					'El Ponte Vecchio es un puente medieval sobre el río Arno en Florencia, conocido por sus tiendas de joyería y sus vistas pintorescas. Es uno de los puentes más famosos y fotografiados de Florencia.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Ponte+Vecchio+Florencia',
			},
			{
				name: 'Galería Uffizi',
				description:
					'La Galería Uffizi es uno de los museos de arte más importantes del mundo, con una impresionante colección de obras maestras renacentistas. Incluye obras de artistas como Botticelli, Leonardo da Vinci y Miguel Ángel.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Galería+Uffizi+Florencia',
			},
			{
				name: 'Piazza della Signoria',
				description:
					'Piazza della Signoria es la plaza principal de Florencia, que alberga una colección de estatuas y esculturas al aire libre, incluida una réplica del David de Miguel Ángel. Es un centro de vida social y política en la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Piazza+della+Signoria+Florencia',
			},
			{
				name: 'Palazzo Pitti',
				description:
					'El Palazzo Pitti es un majestuoso palacio renacentista situado en la orilla sur del río Arno. Fue la residencia de la familia de los Medici y hoy en día alberga varios museos y galerías de arte.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Palazzo+Pitti+Florencia',
			},
			{
				name: 'Galería de la Academia',
				description:
					'La Galería de la Academia es famosa por albergar la escultura original del David de Miguel Ángel. Además del David, la galería también exhibe otras obras maestras de la escultura renacentista.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Galería+de+la+Academia+Florencia',
			},
			{
				name: 'Jardines de Boboli',
				description:
					'Los Jardines de Boboli son unos exquisitos jardines italianos situados detrás del Palazzo Pitti en Florencia. Son un oasis verde de belleza y tranquilidad, perfecto para pasear y disfrutar de vistas panorámicas de la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Jardines+de+Boboli+Florencia',
			},
		],
	},

	roma: {
		name: 'Roma',
		history:
			'Roma es la capital de Italia y una de las ciudades más antiguas y fascinantes del mundo. Con una historia que abarca más de dos milenios, Roma es conocida por su impresionante patrimonio histórico y arquitectónico, que incluye monumentos icónicos como el Coliseo y el Vaticano.',
		places: [
			{
				name: 'Coliseo',
				description:
					'El Coliseo es un antiguo anfiteatro romano ubicado en el centro de Roma. Es uno de los monumentos más famosos del mundo y un símbolo icónico de la antigua Roma.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Coliseo+Roma',
			},
			{
				name: 'Foro Romano',
				description:
					'El Foro Romano era el centro político, religioso y comercial de la antigua Roma. Hoy en día, es una vasta área arqueológica que muestra las ruinas de templos, basílicas y edificios gubernamentales.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Foro+Romano+Roma',
			},
			{
				name: 'Basílica de San Pedro',
				description:
					'La Basílica de San Pedro es la iglesia más grande del mundo y el corazón espiritual del catolicismo. Su majestuosa cúpula y su impresionante interior hacen que sea una visita obligada en Roma.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Basílica+de+San+Pedro+Roma',
			},
			{
				name: 'Museos Vaticanos',
				description:
					'Los Museos Vaticanos albergan una impresionante colección de arte y artefactos históricos, incluida la Capilla Sixtina con sus famosos frescos de Miguel Ángel. Es uno de los museos más importantes del mundo.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Museos+Vaticanos+Roma',
			},
			{
				name: 'Fontana di Trevi',
				description:
					'La Fontana di Trevi es una de las fuentes más famosas del mundo y una de las atracciones turísticas más populares de Roma. Se cree que arrojar una moneda en la fuente garantiza un regreso a Roma.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Fontana+di+Trevi+Roma',
			},
			{
				name: 'Panteón de Agripa',
				description:
					'El Panteón de Agripa es un antiguo templo romano dedicado a todos los dioses del panteón romano. Es famoso por su impresionante cúpula y su diseño arquitectónico innovador.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Panteón+de+Agripa+Roma',
			},
			{
				name: 'Plaza de España',
				description:
					'La Plaza de España es una plaza monumental en el corazón de Roma, conocida por su impresionante escalinata y su elegante fuente barroca. Es un popular punto de encuentro y lugar para pasear.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Plaza+de+España+Roma',
			},
		],
	},

	barcelona: {
		name: 'Barcelona',
		history:
			'Barcelona es una vibrante ciudad ubicada en la costa mediterránea de España, famosa por su arquitectura modernista, su rica cultura y su animada vida nocturna. Es la capital de la región de Cataluña y uno de los destinos turísticos más populares de Europa.',
		places: [
			{
				name: 'Sagrada Familia',
				description:
					'La Sagrada Familia es una impresionante iglesia diseñada por el arquitecto Antoni Gaudí, que aún está en construcción. Es uno de los monumentos más famosos de Barcelona y un símbolo icónico de la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Sagrada+Familia+Barcelona',
			},
			{
				name: 'Parque Güell',
				description:
					'El Parque Güell es un hermoso parque público diseñado por Antoni Gaudí, conocido por sus coloridos mosaicos y su arquitectura surrealista. Es un lugar popular para pasear y disfrutar de vistas panorámicas de la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Parque+Güell+Barcelona',
			},
			{
				name: 'La Rambla',
				description:
					'La Rambla es una famosa calle peatonal en el corazón de Barcelona, conocida por sus tiendas, restaurantes y artistas callejeros. Es un lugar animado y colorido que refleja la vida urbana de la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=La+Rambla+Barcelona',
			},
			{
				name: 'Barrio Gótico',
				description:
					'El Barrio Gótico es el núcleo histórico de Barcelona, conocido por sus estrechas calles medievales y su impresionante arquitectura gótica. Es un lugar encantador para pasear y descubrir la historia de la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Barrio+Gótico+Barcelona',
			},
			{
				name: 'La Pedrera',
				description:
					'La Pedrera, también conocida como Casa Milà, es un impresionante edificio modernista diseñado por Antoni Gaudí. Es famoso por su fachada ondulante y su innovador diseño arquitectónico.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=La+Pedrera+Barcelona',
			},
			{
				name: 'Camp Nou',
				description:
					'El Camp Nou es el estadio del FC Barcelona y uno de los estadios de fútbol más grandes del mundo. Es un lugar emblemático para los aficionados al fútbol y ofrece visitas guiadas para explorar el estadio y su museo.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Camp+Nou+Barcelona',
			},
			{
				name: 'Montjuïc',
				description:
					'Montjuïc es una colina situada cerca del centro de Barcelona, conocida por sus parques, jardines y vistas panorámicas de la ciudad. Es un lugar popular para pasear, hacer picnic y visitar museos como el MNAC y el Poble Espanyol.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Montjuïc+Barcelona',
			},
		],
	},
	madrid: {
		name: 'Madrid',
		history:
			'Madrid es la capital de España y una de las ciudades más grandes y animadas de Europa. Con una rica historia, una vibrante cultura y una emocionante vida nocturna, Madrid atrae a millones de visitantes cada año.',
		places: [
			{
				name: 'Museo del Prado',
				description:
					'El Museo del Prado es uno de los museos de arte más importantes del mundo, con una impresionante colección de pinturas europeas de los siglos XII al XIX. Incluye obras maestras de artistas como Velázquez, Goya y El Greco.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Museo+del+Prado+Madrid',
			},
			{
				name: 'Parque del Retiro',
				description:
					'El Parque del Retiro es un hermoso parque urbano en el corazón de Madrid, conocido por su lago, sus jardines y sus monumentos. Es un lugar popular para pasear, hacer picnic y disfrutar de actividades al aire libre.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Parque+del+Retiro+Madrid',
			},
			{
				name: 'Plaza Mayor',
				description:
					'La Plaza Mayor es una plaza histórica en el centro de Madrid, conocida por su arquitectura barroca y su vibrante ambiente. Es un lugar popular para pasear, disfrutar de la gastronomía local y ver actuaciones callejeras.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Plaza+Mayor+Madrid',
			},
			{
				name: 'Palacio Real',
				description:
					'El Palacio Real es la residencia oficial de la monarquía española en Madrid. Con su impresionante arquitectura y sus lujosos interiores, es uno de los palacios más grandes de Europa y una atracción turística imperdible.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Palacio+Real+Madrid',
			},
			{
				name: 'Gran Vía',
				description:
					'La Gran Vía es una de las principales calles comerciales y de ocio de Madrid, conocida por sus tiendas, teatros y edificios emblemáticos. Es un lugar animado tanto de día como de noche, perfecto para ir de compras o disfrutar de la vida nocturna.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Gran+Vía+Madrid',
			},
			{
				name: 'Estadio Santiago Bernabéu',
				description:
					'El Estadio Santiago Bernabéu es el estadio del Real Madrid y uno de los estadios de fútbol más famosos del mundo. Ofrece visitas guiadas para explorar el estadio, el museo y la historia del club.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Estadio+Santiago+Bernabéu+Madrid',
			},
			{
				name: 'Templo de Debod',
				description:
					'El Templo de Debod es un antiguo templo egipcio que fue trasladado y reconstruido en Madrid como un regalo del gobierno egipcio. Es un lugar tranquilo para pasear y disfrutar de las vistas del atardecer sobre la ciudad.',
				googleLink:
					'https://www.google.com/maps/search/?api=1&query=Templo+de+Debod+Madrid',
			},
		],
	},
};
