CREATE DATABASE  IF NOT EXISTS `assessment` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `assessment`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: assessment
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avaliblenumber`
--

DROP TABLE IF EXISTS `avaliblenumber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliblenumber` (
  `idAvalibleNumber` int NOT NULL,
  PRIMARY KEY (`idAvalibleNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliblenumber`
--

LOCK TABLES `avaliblenumber` WRITE;
/*!40000 ALTER TABLE `avaliblenumber` DISABLE KEYS */;
INSERT INTO `avaliblenumber` VALUES (602767933),(603157298),(604242489),(605390571),(607350494),(607541455),(608163371),(608739690),(608834144),(609612409),(609908075),(610959725),(611552986),(611605203),(613349403),(613678983),(615805896),(617278768),(617564462),(618608443),(618827137),(619143621),(620342700),(620777248),(621479765),(623246213),(623354994),(623559349),(624170369),(624730112),(627811622),(628329246),(628515663),(630506554),(631112399),(632077841),(632437648),(635107543),(635993619),(636305531),(637136649),(638962891),(639141973),(640336804),(641116348),(641304526),(641711606),(642073700),(642310630),(643295041),(643313078),(644199790),(644770705),(645985038),(647641995),(648102622),(648919224),(649387175),(651619360),(652755816),(653042898),(653828961),(654621903),(658807785),(659257177),(659587999),(660537687),(660596395),(661996216),(662091136),(662094775),(665726619),(665774029),(667249583),(669082693),(670572610),(673125270),(673712253),(673748919),(674701900),(676400301),(680352413),(682472346),(683107738),(683445862),(683959431),(684133382),(686258040),(687971694),(688290534),(688661868),(688882123),(690523007),(691353678),(691587202),(691663759),(692005450),(694306276),(698555829),(698850774);
/*!40000 ALTER TABLE `avaliblenumber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organisation`
--

DROP TABLE IF EXISTS `organisation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organisation` (
  `idOrganisation` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`idOrganisation`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organisation`
--

LOCK TABLES `organisation` WRITE;
/*!40000 ALTER TABLE `organisation` DISABLE KEYS */;
INSERT INTO `organisation` VALUES (1,'IBERDROLA'),(2,'ENDESA'),(3,'GASNATURAL');
/*!40000 ALTER TABLE `organisation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `org_id` int NOT NULL,
  `phone_number` int DEFAULT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `phone_number_UNIQUE` (`phone_number`),
  KEY `fk_org_to_user_idx` (`org_id`),
  CONSTRAINT `fk_number_to_user` FOREIGN KEY (`phone_number`) REFERENCES `avaliblenumber` (`idAvalibleNumber`),
  CONSTRAINT `fk_org_to_user` FOREIGN KEY (`org_id`) REFERENCES `organisation` (`idOrganisation`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (6,'Valentina','Pérez',3,660537687),(8,'Isabella','Ramirez',1,613678983),(9,'Miguel','González',3,613349403),(11,'Benjamín','Martín',2,637136649),(14,'Alejandro','López',2,687971694),(17,'Renata','Pérez',2,649387175),(18,'Matías','González',3,644770705),(19,'Victoria','Sánchez',1,623246213),(20,'Joaquín','Martínez',2,638962891),(21,'Paula','Hernández',3,619143621),(22,'Facundo','Rodríguez',1,691353678),(23,'Catalina','López',2,609612409),(24,'Tomás','Díaz',3,698850774),(25,'Antonella','Fernández',1,636305531),(26,'Luciano','García',2,608739690),(27,'Florencia','Ruiz',3,641711606),(28,'Agustín','Torres',1,683107738),(29,'Maite','Sánchez',2,682472346),(30,'Lucía','Martínez',3,605390571),(31,'Juan Pablo','Gómez',1,642310630),(32,'Constanza','Pérez',2,604242489),(33,'Ignacio','González',3,623354994),(34,'Agustina','Hernández',1,641116348),(35,'Gael','López',2,611552986),(36,'Luz','Díaz',3,635107543),(37,'Julián','Fernández',1,632437648),(38,'Amanda','Rodríguez',2,673125270),(39,'Thiago','Torres',3,669082693),(40,'Valentino','Gómez',1,647641995),(41,'Abril','Martínez',2,659587999),(42,'Bruno','Sánchez',3,617564462),(43,'Mía','García',1,632077841),(44,'Manuel','López',2,630506554),(45,'Martín','Díaz',3,643295041),(46,'Emilio','Fernández',1,688661868),(47,'María José','Pérez',2,652755816),(48,'Antonia','González',3,661996216),(49,'Iker','Hernández',1,610959725),(50,'Aitana','Ruiz',2,602767933),(51,'Joaquín','Martínez',3,624170369),(52,'Alma','Sánchez',1,691663759),(53,'Bautista','Torres',2,631112399),(54,'Paulina','Gómez',3,683445862),(55,'León','Rodríguez',1,609908075),(56,'Renata','López',2,641304526),(57,'Matías','Díaz',3,665774029),(58,'Sara','Fernández',1,615805896),(59,'Diego','González',2,603157298),(60,'Emma','Hernández',3,640336804),(61,'Maximiliano','Ruiz',1,617278768),(62,'Amelia','Martínez',2,648919224),(63,'Juan Cruz','Sánchez',3,653828961),(64,'Olivia','García',1,642073700),(65,'Santiago','López',2,676400301),(66,'Clara','Díaz',3,624730112),(67,'Bruno','Fernández',1,608163371),(68,'Alonso','Rodríguez',2,651619360),(69,'Alma','Torres',3,690523007),(70,'Isidro','Gómez',1,628329246),(71,'Abril','Martínez',2,673748919),(72,'Ramiro','Sánchez',3,645985038),(73,'Valentina','García',1,639141973),(74,'Ignacio','Díaz',2,698555829),(75,'Delfina','Hernández',3,611605203),(76,'Felipe','Ruiz',1,607541455),(77,'Abril','Martínez',2,653042898),(78,'Bautista','López',3,680352413),(79,'Irene','Fernández',1,643313078),(80,'Juan','Gomez',2,NULL),(81,'Aurora','Martínez',3,662091136),(83,'Lara','García',2,620342700),(84,'Facundo','Díaz',3,608834144),(86,'Valentina','García',1,NULL),(87,'Ignacio','Díaz',2,NULL),(88,'Delfina','Hernández',3,NULL),(89,'Felipe','Ruiz',1,NULL),(90,'Abril','Martínez',2,NULL),(91,'Bautista','López',3,NULL),(92,'Irene','Fernández',1,NULL),(93,'Santino','González',2,NULL),(94,'Aurora','Martínez',3,NULL),(95,'Amadeo','Sánchez',1,NULL),(96,'Lara','García',2,NULL),(97,'Emilia','Fernández',1,NULL),(111,'Juan','Gomez',2,NULL),(113,'Juan','Gomez',2,NULL);
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

-- Dump completed on 2024-06-01 12:46:44
