use alerta_digital_in5bv;

insert into usuarios (nombre_usuario, correo_electronico, contrasena, rol, estado_cuenta) values
('juan', 'juan@alertadigital.com', 'pass123', 'administrador', 'activo'),
('luis', 'luis@alertadigital.com', 'pass456', 'moderador', 'activo'),
('gaby', 'gaby@alertadigital.com', 'pass789', 'usuario', 'activo'),
('hugo', 'hugo@alertadigital.com', 'passabc', 'usuario', 'activo'),
('paco', 'paco@alertadigital.com', 'passxyz', 'usuario', 'activo');

insert into denuncias (id_usuario, titulo, descripcion, tipo_ciberacoso, estado_denuncia, nivel_prioridad) values
(3, 'Caso A', 'Acoso en redes sociales', 'Hostigamiento', 'pendiente', 'alta'),
(4, 'Caso B', 'Robo de mi cuenta de chat', 'Suplantación', 'en_revision', 'urgente'),
(null, 'Caso C', 'Mensajes feos de anonimo', 'Acoso', 'atendida', 'media'),
(5, 'Caso D', 'Pasaron mi numero publico', 'Doxxing', 'pendiente', 'urgente'),
(3, 'Caso E', 'Burlas en foro de escuela', 'Ciberbullying', 'descartada', 'baja');

insert into pruebas_denuncia (id_denuncia, url_archivo, tipo_archivo, tamano_bytes, descripcion_evidencia) values
(1, 'img1.png', 'image/png', 1000, 'Captura 1'),
(1, 'img2.png', 'image/png', 1200, 'Captura 2'),
(2, 'img3.jpg', 'image/jpeg', 1500, 'Captura 3'),
(3, 'img4.png', 'image/png', 900, 'Captura 4'),
(4, 'img5.png', 'image/png', 2000, 'Captura 5');

insert into categorias_recomendacion (nombre_categoria, descripcion, icono_css, nivel_dificultad, es_activa) values
('Cuentas', 'Ajustar la privacidad', 'css1', 'basico', true),
('Enlaces', 'Evitar paginas falsas', 'css2', 'intermedio', true),
('Claves', 'Hacer contrasenas fuertes', 'css3', 'basico', true),
('Redes', 'Navegacion segura vpn', 'css4', 'avanzado', true),
('Mental', 'Como actuar y que hacer', 'css5', 'basico', true);

insert into recomendaciones (id_categoria, id_autor, titulo, contenido_pasos, plataforma_objetivo, es_destacado) values
(1, 1, 'Paso A', 'Pasos para cerrar tu cuenta', 'Instagram', true),
(3, 1, 'Paso B', 'Usa doble factor de acceso', 'General', true),
(2, 2, 'Paso C', 'No abras links sospechosos', 'General', false),
(1, 2, 'Paso D', 'Quita tu numero de la app', 'Telegram', false),
(5, 1, 'Paso E', 'Bloquea directo al agresor', 'General', true);

insert into hilos_foro (id_usuario, alias_anonimo, titulo, contenido_inicial, estado_hilo, total_respuestas) values
(3, 'Anónimo', 'Hilo A', 'Tengo dudas con bots', 'abierto', 2),
(null, 'Anti', 'Hilo B', 'Datos para ir a denunciar', 'fijado', 1),
(4, 'Anónimo', 'Hilo C', 'Dudas de seguridad Wifi', 'abierto', 2),
(5, 'User', 'Hilo D', 'Acoso en partidas de juego', 'cerrado', 0),
(null, 'Anónimo', 'Hilo E', 'Ojo con links en discord', 'abierto', 0);

insert into publicaciones_foro (id_hilo, id_usuario, alias_anonimo, mensaje, url_imagen_adjunta) values
(1, 4, 'Anónimo', 'Bloquea las palabras', null),
(1, null, 'Gamer', 'Pon tu cuenta privada', null),
(2, 1, 'juan', 'Buen aporte para todos', null),
(3, null, 'Anon', 'Usa vpn con killswitch', 'img_foro.jpg'),
(3, 4, 'Anónimo', 'Si eso ayuda bastante', null);

insert into calificaciones_plataforma (id_usuario, puntuacion, tipo_evaluacion, comentario, se_recomienda_sitio) values
(3, 5, 'General', 'Me gusta la pagina', true),
(4, 4, 'Foro', 'Buen foro para platicar', true),
(5, 2, 'Soporte', 'Tardan mucho en ver caso', false),
(3, 5, 'Utilidad', 'Me sirvieron los tips', true),
(1, 5, 'General', 'Gran iniciativa web', true);