const productos = [
    {
        id: 1,
        title: "Camiseta M Auxiliadora",
        imgSrc: "https://i.imgur.com/1jUvJcx.png?1",
        price:49500,
        price_42:50000,
        price_44:60000,
        description:"Tela Lacoste  100% hilo 65/35 algodón peinado",
        prices : [
            49500, 51500, 54500, 59500, 69500
        ],
        sizes : [
            6,8,10,12,14,16, "XS", "S", "M", "L", "XL", "XXL"
        ],
        institucion: "MariaAuxiliadora",
        categoria: "Camisetas"
    },
    {
        id: 2,
        title: "Sudadera M Auxiliadora",
        imgSrc: "https://i.imgur.com/7xdUVSj.png",
        price:75500,
        price_42:55000,
        description:"Resistente, suave y delicada al contacto con la piel, color mate ideal para el uso frecuente. Composición: 93% burda licrada y 7% elastano",
        prices : [
            75500, 81500, 89500, 94500, 104500
        ],
        sizes : [
            6,8,10,12,14,16, "XS", "S", "M", "L", "XL", "XXL"
        ],
        institucion: "MariaAuxiliadora",
        categoria: "Pantalones"
    },
    {
        id: 3,
        title: "Chaqueta M Auxiliadora",
        imgSrc: "https://i.imgur.com/lUF6ZcE.png",
        price:89500,
        price_42:85000,
        description:"Resistente, suave y delicada al contacto con la piel, color mate ideal para el uso frecuente. Composición: 93% burda licrada y 7% elastano",
        prices : [
            89500, 94500, 99500, 109500, 119500
        ],
        sizes : [
            6,8,10,12,14,16, "XS", "S", "M", "L", "XL", "XXL"
        ],
        institucion: "MariaAuxiliadora",
        categoria: "Chaquetas"
    },
    {
        id:20,
        title: "Uniforme completo M Auxiliadora",
        imgSrc: "https://i.imgur.com/5A9HQJE.png",
        price: 205500,
        description: "Incluye chauqeta, sudadera y camiseta",
        prices: [205500, 216500, 233500, 253500, 283500],
        sizes: [6,8,10,12,14,16, "XS", "S", "M", "L", "XL", "XXL"],
        institucion: "MariaAuxiliadora",
        categoria: "Uniformes completos"
    },
    {
        id: 4,
        title: "Falda",
        imgSrc: "https://www.uniformesminime.com/sites/default/files/imagecache/product_full/products/bonbon/uniformes/uea014.jpg",
        price:68000,
        price_42:73000,
        description:"lorem ipsum bla bla bla iv vour let no se que lorem ipsum dolor",
        prices : [
            45000, 50000, 60000
        ],
        sizes : [
            4,6,8,10,12,14,16,36,38,40,42,44
        ],
        institucion: "MariaAuxiliado",
        categoria: "falds"
    },
    {
        id: 5,
        title: "Blusa Rayco",
        imgSrc: "https://images.squarespace-cdn.com/content/v1/520dc4c1e4b0a5dd07f73169/1433451709981-GZURXYMAT3GXJM223JLF/uniformes-corp-blusa-blanca-clasica.png",
        price:37000,
        price_42:39000,
        description:"lorem ipsum bla bla bla iv vour let no se que lorem ipsum dolor",
        prices : [
            45000, 50000, 60000
        ],
        sizes : [
            4,6,8,10,12,14,16,36,38,40,42,44
        ],
        institucion: "",
        categoria: "Camisets"
    },
    {
        id: 6,
        title: "Jean Rayco",
        imgSrc: "https://majuauniformes.com/wp-content/uploads/2017/03/Jean-Hombre-dotacion.png",
        price:45000,
        description:"lorem ipsum bla bla bla iv vour let no se que lorem ipsum dolor",
        prices : [
            45000, 50000, 60000
        ],
        sizes : [
            4,6,8,10,12,14,16,36,38,40,42,44
        ],
        institucion: "MariaAuxiliado",
        categoria: "Pantalone"
        
    }, 
    {
        id: 7,
        title: "Camiseta Yetex",
        imgSrc: "https://api.bridgemarkets.com/v1/image.php?size=1200&url=https://d1u9bbhcasux7c.cloudfront.net/uploads/2021/12/sueter_hombre_liso_1.jpg",
        price:45000,
        description:"lorem ipsum bla bla bla iv vour let no se que lorem ipsum dolor",
        prices : [
            45000, 50000, 60000
        ],
        sizes : [
            4,6,8,10,12,14,16,36,38,40,42,44
        ],
        institucion: "Maria Auxiliadora",
        categoria: "Camiseta"
        
    },
    {
        id: 8,
        title: "Sudadera Yetex",
        imgSrc: "https://antropologistica.com/wp-content/uploads/2020/07/pantalos-sudadera-jml.jpg",
        price:45000,
        description:"lorem ipsum bla bla bla iv vour let no se que lorem ipsum dolor",
        prices : [
            45000, 50000, 60000
        ],
        sizes : [
            4,6,8,10,12,14,16,36,38,40,42,44
        ],
        institucion: "Maria Auxiliadora",
        categoria: "Pantalone"
        
    },
    {
        id: 9,
        title: "Chaqueta Yetex",
        imgSrc: "https://uniformesog.com/wp-content/uploads/2019/06/img_franciscano_chaqueta-600x600.jpg",
        price:45000,
        description:"lorem ipsum bla bla bla iv vour let no se que lorem ipsum dolor",
        prices : [
            45000, 50000, 60000
        ],
        sizes : [
            4,6,8,10,12,14,16,36,38,40,42,44
        ],
        institucion: "Maria Auxiliadora",
        categoria: "Busos y Chaqueta"
        
    },
    {
        id: 10,
        title: "Jean Yetex",
        imgSrc: "https://http2.mlstatic.com/D_NQ_NP_907413-MCO31043332321_062019-W.jpg",
        price:45000,
        description:"lorem ipsum bla bla bla iv vour let no se que lorem ipsum dolor",
        prices : [
            45000, 50000, 60000
        ],
        sizes : [
            4,6,8,10,12,14,16,36,38,40,42,44
        ],
        institucion: "Maria Auxiliadora",
        categoria: "Pantalone"
        
    },
    {
        id:11,
        title: "Tennis M Auxiliadora",
        imgSrc: "https://i.imgur.com/GirYzu4.png",
        price: 80000,
        description: "Replicas triple a",
        prices: [80000, 80000, 80000],
        sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
        prices:[80000],
        institucion: "MariaAuxiliadora",
        categoria: "Calzado"
    },    
    {
        id: 13,
        title: "Camiseta Adelaida",
        imgSrc: "https://i.imgur.com/GWj2xbj.png",
        price:42500,
        price_42:50000,
        price_44:60000,
        description:"Tela Lacoste  100% hilo 65/35 algodón peinado, imagen de referencia",
        prices : [
            42500, 45500, 52500, 62500
        ],
        sizes : [
            6,8,10,12,14,16, "XS", "S", "M", "L", "XL", "XXL"
        ],
        institucion: "AdelaidaCorrea",
        categoria: "Camisetas"
    },
    {
        id: 14,
        title: "Chaqueta Adelaida",
        imgSrc: "https://i.imgur.com/9MuyqQ8.png",
        price:89500,
        price_42:50000,
        price_44:60000,
        description:"Chaqueta de la institución Adelaida Correa Estrada, la imagen es solo de referencia",
        prices : [
            89500, 94500, 99500, 109500
        ],
        sizes : [
            6,8,10,12,14,16, "XS", "S", "M", "L", "XL", "XXL"
        ],
        institucion: "AdelaidaCorrea",
        categoria: "Chaquetas"
    },
    {
        id: 15,
        title: "Sudadera Adelaida",
        imgSrc: "https://i.imgur.com/ff82yA7.png",
        price:47500,
        price_42:50000,
        price_44:60000,
        description:"Resistente, suave y delicada al contacto con la piel, color mate ideal para el uso frecuente. Composición: 93% burda licrada y 7% elastano. Las imágenes son solo de referencia",
        prices : [
            47500, 55500, 62500, 72500
        ],
        sizes : [
            6,8,10,12,14,16, "XS", "S", "M", "L", "XL", "XXL"
        ],
        institucion: "AdelaidaCorrea",
        categoria: "Pantalones"
    },
    {
        id: 16,
        title: "Uniforme Completo Adelaida",
        imgSrc: "https://i.imgur.com/KsMD2jM.png",
        price:170500,
        price_42:50000,
        price_44:60000,
        description:"Incluye camiseta, sudadera y chaqueta",
        prices : [
            170500, 185500, 204500, 234500
        ],
        sizes : [
            6,8,10,12,14,16, "XS", "S", "M", "L", "XL", "XXL"
        ],
        institucion: "AdelaidaCorrea",
        categoria: "Uniformes completos"
    },
    {
        id:17,
        title: "Tennis Adelaida",
        imgSrc: "https://i.imgur.com/GirYzu4.png",
        price: 80000,
        description: "Replicas triple a",
        prices: [80000, 80000, 80000],
        sizes: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
        prices:[80000],
        institucion: "AdelaidaCorrea",
        categoria: "Calzado"
    }
        
    
]

export default productos