-- MariaDB dump 10.19  Distrib 10.6.12-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: sthetics
-- ------------------------------------------------------
-- Server version	10.6.12-MariaDB-0ubuntu0.22.04.1

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
-- Table structure for table `budget`
--

DROP TABLE IF EXISTS `budget`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `budget` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `telephone` bigint(11) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `city` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `hour` varchar(255) NOT NULL,
  `obs` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `budget_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `budget`
--

LOCK TABLES `budget` WRITE;
/*!40000 ALTER TABLE `budget` DISABLE KEYS */;
INSERT INTO `budget` VALUES (1,1,49999701259,'Avenida Porto Alegre - D','SC','Chapecó','2023-11-08','Manhã',''),(2,8,49991491665,'Rua Presidente Castelo Branco - E','SC','Chapecó','2023-11-30','Tarde',''),(3,9,49991626662,'Rua Presidente Castelo Branco - E','SC','Chapecó','2023-11-30','Noite','Gostaria que fosse bom, pelo menos!'),(4,10,49999024235,'Rua Limoeiro do Norte','CE','Fortaleza','2023-11-14','Tarde','Testes'),(5,1,49999701259,'Rua Presidente Castelo Branco - E','SC','Chapecó','2023-11-30','Manhã','Observações importantes'),(6,1,49900000000,'Av Porto Alegre 1431 D','SC','Chapecó','2023-11-30','Noite','asd');
/*!40000 ALTER TABLE `budget` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `body` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,1,'Assunto de E-mail','Mensagem de e-mail'),(2,1,'Ótimo atendimento','Fui atendido de maneira explêndida!'),(3,1,'Assuntinho','Mensagemzinha'),(4,1,'te','te'),(5,2,'teste','teste'),(6,7,'tet','tet'),(7,8,'Muito bom!','Acho que o atendimento foi excelente!'),(8,11,'Simulador de memória Cache','CPU não pega da RAM, o cache pega da RAM e passa para CPU'),(9,12,'Qualquer um','Teste');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `service_id` bigint(20) DEFAULT NULL,
  `review` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `service_id` (`service_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,12913165261,'Teste avulso'),(2,1,987654321,'teste'),(3,1,12913165261,'teste'),(4,8,12913165261,'Avaliação avulsa');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service` (
  `id` bigint(20) NOT NULL,
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
  `iframe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (2055208,'teeth','Clareamento Dental',179.90,30,'dias úteis','8h ~ 18h','Um sorriso mais brilhante e confiante em minutos!','O clareamento dental usa produtos com peróxido para deixar os dentes mais brancos. Pode ser feito no consultório ou em casa com moldeiras e gel clareador. Isso remove manchas e deixa o sorriso mais brilhante. Consulte um dentista para fazê-lo com segurança','O clareamento dental oferece dentes mais brancos, aumenta a autoconfiança, rejuvenesce o sorriso e melhora a aparência geral. É um procedimento seguro, personalizado e não invasivo que proporciona um sorriso radiante e uma maior autoestima','O clareamento dental proporciona resultados visíveis e dentes notavelmente mais brancos. Os pacientes podem esperar um sorriso mais brilhante, com manchas e descolorações significativamente reduzidas ou eliminadas. Isso resulta em um sorriso mais jovem','teeth.jpg','teeth2.jpg','UvRmgtRGxiA'),(987654321,'hairRemoval','Depilação a Laser',199.99,45,'dias úteis','9:00 ~ 20:00','Reduza permanentemente os pelos indesejados com nossa depilação a laser avançada.','Nossa depilação a laser é um procedimento altamente eficaz para eliminar permanentemente os pelos indesejados. Envolve a aplicação de pulsos de laser que danificam os folículos capilares, impedindo o crescimento futuro dos pelos.','Os benefícios da depilação a laser incluem uma pele mais suave e livre de pelos, reduzindo a necessidade de depilação frequente. Além disso, a pele fica menos irritada em comparação com a depilação tradicional.','Os resultados da depilação a laser são duradouros, com uma redução permanente dos pelos na área tratada. Você pode desfrutar de uma pele suave e livre de pelos por um longo período.','hairRemoval1.jpg','hairRemoval2.jpg','MyQMb26pCwY'),(12913165261,'facial','Limpeza Facial',129.99,60,'dias úteis','10:00 ~ 19:00','Promova a saúde da pele com nossa limpeza facial profissional, removendo impurezas e reduzindo a acne.','A limpeza de pele envolve a remoção de impurezas, cravos e células mortas da pele. Geralmente, é feita com vapor para abrir os poros, seguido da extração manual das impurezas. Depois, aplicam-se produtos para acalmar e hidratar a pele. Isso melhora a textura e a saúde da pele. Consulte um esteticista para realizar o procedimento.','A limpeza de pele remove impurezas, cravos e células mortas, melhorando a textura da pele e estimulando a renovação celular. Isso resulta em uma pele mais suave, hidratada e com menos acne, promovendo uma aparência mais saudável e radiante.','Os resultados incluem uma pele mais suave, textura aprimorada, estimulação da renovação celular e redução da acne, proporcionando uma aparência mais saudável e radiante.','facial1.jpg','facial2.jpg','SIbMDdzBKU4');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uf` varchar(2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uf` (`uf`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'RO','Rondônia'),(2,'AC','Acre'),(3,'AM','Amazonas'),(4,'RR','Roraima'),(5,'PA','Pará'),(6,'AP','Amapá'),(7,'TO','Tocantins'),(8,'MA','Maranhão'),(9,'PI','Piauí'),(10,'CE','Ceará'),(11,'RN','Rio Grande do Norte'),(12,'PB','Paraíba'),(13,'PE','Pernambuco'),(14,'AL','Alagoas'),(15,'SE','Sergipe'),(16,'BA','Bahia'),(17,'MG','Minas Gerais'),(18,'ES','Espírito Santo'),(19,'RJ','Rio de Janeiro'),(20,'SP','São Paulo'),(21,'PR','Paraná'),(22,'SC','Santa Catarina'),(23,'RS','Rio Grande do Sul'),(24,'MS','Mato Grosso do Sul'),(25,'MT','Mato Grosso'),(26,'GO','Goiás'),(27,'DF','Distrito Federal');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Guilherme','guilhermessmith2014@gmail.com'),(2,'Smith','smith@gmail.com'),(3,'Novo','novo@gmail.com'),(4,'novinho','novinho@gmail.com'),(5,'te','te@gmail.com'),(6,'tet','tet@gmail.com'),(7,'Tetinho','tetinho@gmail.com'),(8,'Lucilene Smith Dansiguer','ludansiguer@gmail.com'),(9,'Gabriela Smith','gabismithdansiguer@gmail.com'),(10,'Gustavo Dansiguer','gusdansiguer@gmail.com'),(11,'Ruan','ruan2003@gmail.com'),(12,'Rafaeli','rafa.unoesc@gmail.com'),(13,'Guilherme ','guilhermessmith2015@gmail.com'),(14,'Guilherme ','guilhermessmith2022@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-17 17:46:47
