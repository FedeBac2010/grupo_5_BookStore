-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2022 a las 03:49:27
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bookstore_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `author`
--

CREATE TABLE `author` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Categorías de los libros (Géneros)';

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Ciencia ficción'),
(2, 'Aventura'),
(3, 'Fatansía'),
(4, 'Terror');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `currency` varchar(100) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `author` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `image`, `price`, `currency`, `category_id`, `author`) VALUES
(6, 'Dune', 'Dune relata la historia del planeta desértico Arrakis, única fuente de melange, la especia necesaria para el viaje interestelar y que además garantiza longevidad y poderes psíquicos. La administración de Arrakis es transferida por el emperador de la noble Casa de Harkonnen a la Casa Atreides.', '1666053486360.png', 2500, '$', 1, 'Frank Herbert'),
(7, '1984', 'El personaje principal de la novela es Winston Smith, que trabaja en el Ministerio de la Verdad. ', '1666052875407.png', 2700, '$', 1, 'George Orwell'),
(8, 'Un mundo feliz', 'Un mundo feliz es la novela más famosa del escritor británico Aldous Huxley, publicada por primera vez en 1932.', '1666052913716.png', 2600, '$', 1, 'Aldous Huxley'),
(9, 'El señor de los anillos ', 'El retorno del Rey es el tercer volumen de la novela de fantasía heroica El Señor de los Anillos.', '1666053025896.png', 3000, '$', 1, 'J. R. R. Tolkien'),
(10, 'Robinson Crusoe', 'Robinson Crusoe es una de las obras más famosas del célebre escritor inglés Daniel Defoe, publicada en 1719.', '1666053062215.png', 1800, '$', 2, 'Daniel Defoe'),
(11, 'La vuelta al mundo', 'La vuelta al mundo en ochenta días es una novela del escritor francés Julio Verne publicada en Le Temps.', '1666053132465.png', 2300, '$', 2, 'Julio Verne'),
(12, 'El libro de la selva', 'El libro de la selva, también conocido en español como El libro de las tierras vírgenes.', '1666053167568.png', 1250, '$', 2, 'Rudyard Kipling'),
(15, 'El ojo del mundo', 'El ojo del mundo es una novela de fantasía del escritor estadounidense Robert Jordan y el primer libro de la serie La rueda del tiempo. Fue publicada por Tor Books en inglés y lanzada el 16 de enero de 1990.', '1666040846563.png', 1700, '$', 3, 'Robert Jordan'),
(16, 'Cuento de hadas', 'Stephen King regresa a la fantasía por todo lo alto con una novela magnífica sobre un inesperado héroe que deberá tomar parte en la épica batalla entre el bien y el mal.', '1666040927168.png', 1500, '$', 3, 'Stephen King'),
(17, 'Asesino de Brujas', 'Dos años atrás, Louise le Blanc huyó de su aquelarre y se refugió en la ciudad de Cesarine, donde renunció a la magia para vivir de lo que pudiera robar. Allí, cazan a brujas como Lou. Les temen. Y las queman.', '1666041000594.png', 1600, '$', 3, 'Shelby Mahurin'),
(18, 'El resplandor', 'El resplandor es la tercera novela de terror del escritor estadounidense Stephen King, publicada en 1977. El título se inspiró en la canción de John Lennon «Instant Karma!», que contiene la línea «We all shine on...»', '1666041088266.png', 1400, '$', 4, 'Stephen King'),
(19, 'Soy leyenda', 'Soy leyenda es una novela de terror, suspenso y ciencia ficción escrita por Richard Matheson y publicada en 1954.', '1666041167437.png', 1900, '$', 4, 'Richard Matheson'),
(20, 'Carrie', 'Carrie es la primera novela publicada por el escritor estadounidense Stephen King, en 1974.? Es uno de los libros más censurados en las escuelas de EE. UU. y la película incluso estuvo prohibida en Finlandia.', '1666041294074.png', 2500, '$', 4, 'Stephen King'),
(21, 'En la casa', 'Una casa ailada, 4 chicas, 4 chicos y una noche de terror como diversión... ¿Qué podría salir mal? En la casa nos cuenta la historia de ocho amigos que deciden pasar una noche de terror en la casa de campo de uno de ellos.', '1666041374889.png', 3700, '$', 4, 'Philip Le Roy');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `userEmail` varchar(100) NOT NULL,
  `phoneNumber` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `rol` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `fullName`, `userName`, `password`, `userEmail`, `phoneNumber`, `city`, `avatar`, `rol`) VALUES
(3, 'userAdmin', 'userAdmin', '$2b$12$IXQpy4miy2BdA9xvp4H3cOkb0IJCnrsMvDFYSgjvi/3OfhciQRpK.', 'userAdmin@gmail.com', '12345678', 'userAdmin', '1666044516621.png', 'admin'),
(4, 'Andrea Jeong', 'andreajeong', '$2b$12$C0ds96V252KV.OruLaZCVua639jlZG1H.2gh6gjrRMhWogWe6Txgu', 'andreajeong@gmail.com', '3412517891', 'Rosario', '1666050585287.png', ''),
(5, 'Federico Bacigalupi', 'federicobacigalupi', '$2b$12$TgAlmrDEzFrWSigfut/zvOfmOajSENSBJPZXozmL6nVIqFGcoXawG', 'federicobacigalupi@gmail.com', '12345678', 'Posadas, Misiones', '1666050794995.jpg', ''),
(6, 'Tatiana Murua', 'tatianamurua', '$2b$12$sjwymZeCE/Q6LUIPwOg/yOw7ASgZoRa4CneqHGyEz1mSr86CBt9uy', 'tatianamurua@gmail.com', '12345678', 'Bariloche', '1666050888580.jpg', ''),
(7, 'Rodrigo Calleja', 'rodrigocalleja', '$2b$12$fQLVzJycjndr5PNWKSB/EujR1ngS.ChT0eSL7c3sn3K3.kEmCl1Ci', 'rodrigocalleja@gmail.com', '12345678', 'Posadas', '1666057540532.jpg', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_FK` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `author`
--
ALTER TABLE `author`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `category_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
