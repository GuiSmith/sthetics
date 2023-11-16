-- MariaDB dump 10.19  Distrib 10.6.12-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: sthetics
-- ------------------------------------------------------
-- Server version	10.6.12-MariaDB-0ubuntu0.22.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service` (
  `id` bigint(20) DEFAULT NULL,
  `textId` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `days` varchar(255) DEFAULT NULL,
  `dayHours` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `details` varchar(500) DEFAULT NULL,
  `benefits` varchar(255) DEFAULT NULL,
  `results` varchar(255) DEFAULT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `iframe` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (2055208,'teeth','Clareamento dental',179.99,30,'dias úteis','8h ~ 18h','Um sorriso mais brilhante e confiante em minutos!','O clareamento dental usa produtos com peróxido para deixar os dentes mais brancos. Pode ser feito no consultório ou em casa com moldeiras e gel clareador. Isso remove manchas e deixa o sorriso mais brilhante. Consulte um dentista para fazê-lo com segurança','O clareamento dental oferece dentes mais brancos, aumenta a autoconfiança, rejuvenesce o sorriso e melhora a aparência geral. É um procedimento seguro, personalizado e não invasivo que proporciona um sorriso radiante e uma maior autoestima','O clareamento dental proporciona resultados visíveis e dentes notavelmente mais brancos. Os pacientes podem esperar um sorriso mais brilhante, com manchas e descolorações significativamente reduzidas ou eliminadas. Isso resulta em um sorriso mais jovem','teeth.jpg','teeth2.jpg','UvRmgtRGxiA'),(12913165261,'facial','Limpeza Facial',129.99,60,'dias úteis','10:00 ~ 19:00','Promova a saúde da pele com nossa limpeza facial profissional, removendo impurezas e reduzindo a acne.','A limpeza de pele envolve a remoção de impurezas, cravos e células mortas da pele. Geralmente, é feita com vapor para abrir os poros, seguido da extração manual das impurezas. Depois, aplicam-se produtos para acalmar e hidratar a pele. Isso melhora a textura e a saúde da pele. Consulte um esteticista para realizar o procedimento.','A limpeza de pele remove impurezas, cravos e células mortas, melhorando a textura da pele e estimulando a renovação celular. Isso resulta em uma pele mais suave, hidratada e com menos acne, promovendo uma aparência mais saudável e radiante.','Os resultados incluem uma pele mais suave, textura aprimorada, estimulação da renovação celular e redução da acne, proporcionando uma aparência mais saudável e radiante.','facial1.jpg','facial2.jpg','SIbMDdzBKU4'),(987654321,'hairRemoval','Depilação a Laser',199.99,45,'dias úteis','9:00 ~ 20:00','Reduza permanentemente os pelos indesejados com nossa depilação a laser avançada.','Nossa depilação a laser é um procedimento altamente eficaz para eliminar permanentemente os pelos indesejados. Envolve a aplicação de pulsos de laser que danificam os folículos capilares, impedindo o crescimento futuro dos pelos.','Os benefícios da depilação a laser incluem uma pele mais suave e livre de pelos, reduzindo a necessidade de depilação frequente. Além disso, a pele fica menos irritada em comparação com a depilação tradicional.','Os resultados da depilação a laser são duradouros, com uma redução permanente dos pelos na área tratada. Você pode desfrutar de uma pele suave e livre de pelos por um longo período.','hairRemoval1.jpg','hairRemoval2.jpg','MyQMb26pCwY');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-16  4:10:38
