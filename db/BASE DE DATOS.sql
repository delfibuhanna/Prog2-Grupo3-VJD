CREATE SCHEMA proyecto;
USE proyecto;
CREATE TABLE usuarios (
id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre 				VARCHAR(250) 	NOT NULL,
apellido 			VARCHAR(250) 	NOT NULL,            
mail 				VARCHAR(250) 	NOT NULL,
usuario 			VARCHAR(250) 	NOT NULL,
contrasenia 		VARCHAR(250) 	NOT NULL,
fechaNacimiento   	DATE 			NOT NULL,
numeroDocumento 	INT 			NOT NULL,
foto 				VARCHAR(250) 	NOT NULL,
createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt           TIMESTAMP       NULL
);

INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES(DEFAULT, 'victoria','yoffe','vyoffe@udesa.edu.ar','vyoffe','$2a$10$x55yh69Vaz3rQOCdB/Z1Au8bSKUYHiksgPg1MDh5lp7Abrx8S.7O6','2004-10-15',46287573,'fotoDePerfilV.jpeg', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES(DEFAULT, 'julieta','mielnicki','julimielnicki@gmail.com','jmielnicki', '*****','2005-05-21', 45684492, 'fotoDePerfilJ.jpeg', DEFAULT, DEFAULT,DEFAULT);

INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES(DEFAULT,'delfina','buhanna','delfibuhanna@gmial.com', 'dbuhanna', '*****', '2004-07-01', 46026647, 'fotoDePerfilD.jpeg', DEFAULT, DEFAULT,DEFAULT);

INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES(DEFAULT,'marco','viacava','mviacava@gmail.com','mviacava','*****', '2004-01-30',45421869,'fotoDePerfilM.jpeg', DEFAULT, DEFAULT,DEFAULT);

INSERT INTO usuarios (id,nombre,apellido,mail,usuario,contrasenia,fechaNacimiento,numeroDocumento,foto,createdAt,updatedAt,deletedAt) 
VALUES(DEFAULT,'nicolas','klersferld','nicokler@gmail.com','nkler','*****','2005-03-08',46223367,'fotoDePerfilN.jpeg', DEFAULT, DEFAULT,DEFAULT);

CREATE TABLE productos (
id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuarioId           INT             UNSIGNED,
nombre 				VARCHAR(250) 	NOT NULL,
foto 				VARCHAR(250) 	NOT NULL,
descripcion         VARCHAR(250)    NOT NULL,
createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt           TIMESTAMP       NULL,

FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT, 1, 'licuadora','/images/products/fotoLicuadora.webp', 'Licuadora Moulinex Optimix Plus Lm270558 550 W 2 Lts Roja Color Rojo',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,2,'microondas','/images/products/fotoMicroondas.webp','Microondas Whirlpool Mcp346sl Color Negro Plateado',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT, 3, 'batidora', '/images/products/fotoBatidora.jpeg','Batidora De Mano Moulinex Sx1502ar Color Blanco Frecuencia 50 Hz x 60 Hz',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,4, 'minipimer', '/images/products/fotoMinipimer.jpeg','Mixer Minipimer Mezcladora De Mano Gadnic Mp700 350w 220v Color Negro',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,5,'cafetera','/images/products/fotoCafetera.webp', 'Cafetera Peabody Smartchef Pe-ct4207 Automática De Filtro P2 Color Plata',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT, 1, 'lavasecarropas','/images/products/fotoLavarropas.webp','Lavasecarropas automático Candy Alisè GVSW286 blanco 8kg 220 V',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES( DEFAULT, 2, 'heladera', '/images/products/fotoHeladera.jpeg', 'Heladera inverter no frost Whirlpool WRE57K2 inox con freezer 443L 220V',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES(DEFAULT,3, 'tostadora', '/images/products/fotoTostadora.jpeg','Tostadora Electrica 4 Panes 1300 Watts 6 Niveles Daewoo Color Blanco', DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT, 4, 'freidora de aire', '/images/products/fotoFreidoraDeAire.jpeg','Freidora De Aire Sin Aceite Horno Panel Digital 12 L Unnic Color Negro', DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,usuarioId,nombre,foto,descripcion,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,5,'lavavajillas','/images/products/fotoLavavajillas.webp','Lavavajillas Whirlpool WSFO3T2 de 10 cubiertos acero inoxidable 220V - 240V',  DEFAULT,DEFAULT,DEFAULT);

CREATE TABLE comentarios (
id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuarioId           INT             UNSIGNED,
productoId          INT             UNSIGNED,
textoComentario     VARCHAR(500)    NOT NULL,
createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt           TIMESTAMP       NULL,

FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
FOREIGN KEY (productoId) REFERENCES productos(id)
);

INSERT INTO comentarios (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT, 1, 1, '¡La licuadora que compré es increíble! Hace unos batidos suaves y perfectos en segundos, ¡no puedo creer cómo facilita mi rutina matutina!',  DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT, 1, 1,'Me encanta la potencia de esta licuadora, tritura todo tipo de frutas y verduras sin problemas. Además, es muy fácil de limpiar, lo que la convierte en un imprescindible en mi cocina.', DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT, 1, 1,'Esta licuadora es una maravilla, la uso todos los días para hacer desde batidos hasta sopas cremosas. Su diseño elegante y durabilidad la hacen una excelente inversión para cualquier amante de la cocina.' , DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT, 2, 2, '¡El microondas que compré ha sido un salvavidas en mi cocina! Es tan fácil de usar y hace que calentar y cocinar alimentos sea mucho más rápido. Además, su diseño compacto se adapta perfectamente a mi espacio limitado en la encimera. Estoy muy contento con mi compra y lo recomendaría a cualquiera que busque conveniencia en la cocina.', DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT, 2, 2, 'No estoy muy impresionado con el microondas que compré recientemente. Aunque calienta los alimentos como se espera, siento que la calidad de construcción es un poco decepcionante. La puerta se siente un poco endeble y el panel de control no siempre responde correctamente. Además, encuentro que el tamaño interior es un poco limitado para algunas de mis ollas y platos. En general, diría que es funcional pero no excepcional.', DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT, 2, 2, '¡Este microondas es una maravilla! Me encanta lo rápido que calienta los alimentos y lo fácil que es limpiarlo. La función de descongelado es especialmente útil para mí, ya que puedo preparar comidas rápidamente incluso si olvidé sacar algo del congelador. Además, el diseño moderno le da un toque elegante a mi cocina. Definitivamente lo recomendaría a cualquiera que busque un microondas confiable y eficiente', DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT,3,3, '¡Esta batidora ha superado todas mis expectativas! La potencia del motor es impresionante y hace que mezclar incluso los ingredientes más difíciles sea pan comido. Además, los diferentes accesorios que vienen incluidos son muy útiles. Desde hacer batidos suaves hasta triturar hielo para cócteles, esta batidora puede con todo. Definitivamente la recomendaría a cualquier persona que busque una batidora de alta calidad y versátil.',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT,3,3,'Estoy un poco decepcionada con la batidora que compré recientemente. Aunque funciona bien para batir ingredientes blandos, como huevos o crema, parece tener dificultades con ingredientes más densos. He tenido problemas para lograr una consistencia suave con batidos de frutas congeladas o mezclas de masa más densas. Además, el diseño del vaso mezclador hace que sea un poco difícil limpiarlo adecuadamente. En general, diría que es funcional pero no ideal para todas mis necesidades de cocina', DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT,3,3,'¡No puedo vivir sin mi batidora! La uso prácticamente todos los días para preparar batidos, salsas, purés y más. La potencia del motor es excelente y los resultados siempre son consistentes. Además, el diseño compacto y los accesorios fáciles de limpiar hacen que sea una adición perfecta a mi cocina. Definitivamente la recomendaría a cualquier persona que busque una batidora confiable y de alta calidad.', DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT,4,4,'La mixer Miniprimer es perfecta para preparaciones rápidas. Su tamaño compacto y potencia son ideales para mezclar pequeñas cantidades. ¡La recomendaría para aquellos que buscan practicidad en la cocina!', DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT,4,4,'La Miniprimer es una gran adición a mi cocina. La uso principalmente para batir huevos y hacer mezclas ligeras. Es fácil de manejar y limpiar. ¡Una excelente opción para trabajos pequeños!', DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT,4,4,' Me encanta la Miniprimer por su versatilidad. La utilizo para batir salsas, hacer purés y mezclar ingredientes secos. Aunque es pequeña, su potencia es sorprendente. ¡Altamente recomendada para cocinas compactas!', DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES ( DEFAULT,5,5,'¡Mi cafetera es mi mejor amiga por las mañanas! Hace un café delicioso y aromático en minutos. El diseño es elegante y se ajusta perfectamente a mi cocina. No podría empezar mi día sin ella.', DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT,5,5,'Estoy encantado con mi nueva cafetera. Es fácil de usar y la calidad del café que produce es excelente. Además, el temporizador programable es una característica muy conveniente para tener café recién hecho cuando me levanto. ¡Definitivamente una compra que vale la pena', DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT,5,5,'Mi cafetera ha sido una decepción. Aunque hace café, el sabor no es tan bueno como esperaba y a veces gotea agua. Además, el proceso de limpieza es un poco engorroso. En general, no estoy muy satisfecho con esta compra',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,1,6,'¡Nuestro lavasecarropas es una verdadera bendición! Hace que la tarea de lavar la ropa sea mucho más fácil y conveniente. Con su función de secado, puedo tener la ropa lista para usar en poco tiempo. Sin duda, una excelente inversión para cualquier hogar ocupado.',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,1,6,'Estoy bastante satisfecho con nuestro lavasecarropas. Es práctico tener ambas funciones en un solo electrodoméstico, pero he notado que el proceso de secado puede ser un poco largo para cargas más grandes. Aún así, ha hecho que el lavado de la ropa sea mucho más eficiente para nuestra familia.',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,1,6,'La idea de tener un lavasecarropas parecía genial, pero lamentablemente nuestra experiencia ha sido decepcionante. A menudo tenemos problemas con el secado, ya que la ropa no sale completamente seca después del ciclo. Además, el costo de reparación cuando tuvimos un problema técnico fue bastante elevado. En general, no creo que haya valido la pena la inversión',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,2,7,'¡Nuestra heladera es el corazón de nuestra cocina! Con su amplio espacio y funciones de enfriamiento rápido, siempre tenemos alimentos frescos y bebidas frías a mano. Es eficiente y silenciosa, ¡no podríamos estar más felices con ella!',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,2,7,'La heladera que compramos recientemente ha sido una gran adición a nuestra casa. Tiene un diseño elegante y moderno que complementa nuestra cocina. Además, el sistema de control de temperatura mantiene nuestros alimentos frescos durante más tiempo. ¡Sin duda una compra que recomendaría!',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,2,7,'Estoy un poco decepcionado con nuestra heladera. A pesar de ser nueva, hemos tenido algunos problemas con la temperatura inconsistente en diferentes partes. Además, el espacio en el congelador es bastante limitado. En general, no cumple completamente con nuestras expectativas',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,3,8,'¡Mi tostadora es un elemento imprescindible en mi rutina matutina! Con su ajuste de temperatura, puedo obtener el nivel perfecto de tostado en mi pan cada vez. Es rápida, eficiente y fácil de limpiar. ¡No podría empezar mi día sin ella!',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,3,8,'Estoy muy satisfecho con mi tostadora. Tiene un diseño moderno que se ve genial en mi cocina. Además, las ranuras anchas son perfectas para tostar bagels y rebanadas de pan gruesas. Es una excelente opción para el desayuno rápido y sin complicaciones.',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,3,8,'Nuestra tostadora ha sido un poco decepcionante. Aunque tosta el pan, hemos notado que el tostado no es uniforme en todas las rebanadas. Además, algunas veces las rebanadas más pequeñas se atascan en las ranuras. En general, esperábamos un rendimiento un poco mejor',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,4,9,'¡La freidora de aire ha revolucionado la forma en que cocino! Ahora puedo disfrutar de alimentos crujientes y deliciosos sin la culpa de la fritura tradicional. Es fácil de usar, rápida de limpiar y produce resultados consistentes. ¡Definitivamente un elemento imprescindible en mi cocina!',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,4,9,'Estoy bastante contento con mi freidora de aire. Me encanta cómo hace que los alimentos sean más saludables sin sacrificar el sabor ni la textura. Además, su tamaño compacto la hace perfecta para mi cocina pequeña. ¡Una gran compra que recomendaría a cualquiera que quiera comer de manera más saludable!',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,4,9,'La freidora de aire ha sido una decepción para mí. Aunque promete resultados similares a la fritura tradicional sin el aceite, he encontrado que muchos alimentos no salen tan crujientes como esperaba. Además, el tiempo de cocción puede variar mucho dependiendo del tipo de alimento y de la cantidad que se esté cocinando. En general, no estoy tan impresionado como esperaba.',DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,5,10,'¡Mi lavavajillas es un verdadero salvavidas en la cocina! Hace que la tarea de lavar los platos sea mucho más rápida y fácil. Además, ahorra agua y energía en comparación con lavar a mano. ¡No podría imaginar mi vida sin él!',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,5,10,'Estoy muy satisfecha con mi lavavajillas. Tiene una variedad de ciclos de lavado que se adaptan a diferentes necesidades. Además, el diseño interior es flexible y puedo ajustar los estantes para acomodar artículos más grandes. Sin duda, una gran inversión que ha hecho que la limpieza de los platos sea mucho más eficiente.',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios  (id, usuarioId , productoId, textoComentario, createdAt, updatedAt, deletedAt)
VALUES(DEFAULT,5,10,'Aunque mi lavavajillas hace el trabajo, no estoy completamente satisfecho con su rendimiento. A veces, los platos no salen completamente limpios y tengo que volver a lavarlos a mano. Además, el proceso de secado no siempre es efectivo y a menudo encuentro gotas de agua en los platos. En general, es útil pero esperaba un poco más de calidad.',DEFAULT,DEFAULT,DEFAULT);
