-- MySQL dump 10.13  Distrib 5.5.43, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: 
-- ------------------------------------------------------
-- Server version	5.5.43-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `cadavers`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `heroku_7d0ebc541b4bcf7` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `heroku_7d0ebc541b4bcf7`;

--
-- Table structure for table `Lines`
--

DROP TABLE IF EXISTS `Lines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Lines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lineNumber` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `storiesId` int(11) DEFAULT NULL,
  `lineText` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lines`
--

LOCK TABLES `Lines` WRITE;
/*!40000 ALTER TABLE `Lines` DISABLE KEYS */;
INSERT INTO `Lines` VALUES (1,1,'2015-10-19 00:00:00',1,'The clear star that is yesterday rains heavily and'),(2,2,'2015-10-19 00:00:00',1,'the last sentence you saw says hello. Bob'),(3,3,'2015-10-19 00:00:00',1,'thinks sixty-four is often one floor above you'),(4,4,'2015-10-19 00:00:00',1,'A stumbling first step is running away.'),(5,5,'2015-10-19 00:00:00',1,'A late night is nonsensical, much like me.'),(6,6,'2015-10-19 00:00:00',1,'Nothingness tells the tale of towers, while'),(7,7,'2015-10-19 00:00:00',1,'Pinocchio gambles with lives, happiness, and even destiny itself!'),(8,8,'2015-10-19 00:00:00',1,'That memory we used to share is too good for you,'),(9,9,'2015-10-19 00:00:00',1,'but the other side is nothing at all?'),(10,10,'2015-10-19 00:00:00',1,'The person you were before has its world rocked by trees (or rocks),'),(11,11,'2015-10-19 00:00:00',1,'and the body of mind brings both pleasure and pain.'),(12,12,'2015-10-19 00:00:00',1,'Abstraction wanted the TRUTH! '),(13,13,'2015-10-19 00:00:00',1,'Tomorrow was always the second best.'),(14,14,'2015-10-19 00:00:00',1,'A classical composition woke the prime minister, but'),(15,15,'2015-10-19 00:00:00',1,'A setback of the heart approaches at high velocity!'),(16,1,'2015-10-19 00:00:00',2,'How does the economic expert record the linen?'),(17,2,'2015-10-19 00:00:00',2,'How does the harbor render the equable payment?'),(18,3,'2015-10-19 00:00:00',2,'How does the ceaseless form sample the support?'),(19,4,'2015-10-19 00:00:00',2,'Why does the trite disease co-operate the coal?'),(20,5,'2015-10-19 00:00:00',2,'How does the disease estimate the spotty harmony?'),(21,6,'2015-10-19 00:00:00',2,'How does the holistic transport decide the self?'),(22,7,'2015-10-19 00:00:00',2,'Why does the rub condense the hilarious lift?'),(23,8,'2015-10-19 00:00:00',2,'When does the work decide the nice minute?'),(24,9,'2015-10-19 00:00:00',2,'When does the religion derive the gruesome authority?'),(25,10,'2015-10-19 00:00:00',2,'How does the sign quote the aberrant daughter?'),(26,1,'2015-10-19 00:00:00',3,'The writing of post-capitalist hegemony interrogates the renunciation of pedagogical institutions.'),(27,2,'2015-10-19 00:00:00',3,'The internal structure of the tension between nature and history fails to penetrate the myths obscuring the emergence of metaphoric substitution.'),(28,3,'2015-10-19 00:00:00',3,'The fiction of the proper-name effect pervades the project of desire.'),(29,4,'2015-10-19 00:00:00',3,'The renunciation of syntactical certainty gestures toward the illusion of disciplinary boundaries.'),(30,5,'2015-10-19 00:00:00',3,'The authentication of post-Hegelian criticism is in effect identical to the invention of process.'),(31,6,'2015-10-19 00:00:00',3,'The disintegration of the specular economy is synonymous with the teleology of (self)referentiality.'),(32,7,'2015-10-19 00:00:00',3,'The formation of narrative sequence is connected to the culture of \'high\' culture.'),(33,8,'2015-10-19 00:00:00',3,'The disintegration of commodified objects highlights the teleology of materiality.'),(34,9,'2015-10-19 00:00:00',3,'The imposition of the public sphere functions as the conceptual frame for the fragmentation of disciplinary boundaries.'),(35,10,'2015-10-19 00:00:00',3,'The authentication of classification replays (in parodic form) the totalization of the culture industry.'),(36,11,'2015-10-19 00:00:00',3,'The cooptation of corporeality opens a space for the (re)invention of \'high\' culture.'),(37,12,'2015-10-19 00:00:00',3,'The experience of the hidden is closely allied with the politics of teleological narrative.'),(38,13,'2015-10-19 00:00:00',3,'The politics of narrative qua narrative reflects the marketing of romantic inwardness.'),(39,14,'2015-10-19 00:00:00',3,'The representational validity of agency parallels the idea of an anthropocentric history.'),(40,15,'2015-10-19 00:00:00',3,'The legitimation of DeMan\'s aesthetic ideology is associated with the epistemology of system.'),(41,16,'2015-10-19 00:00:00',3,'The culture of praxis goes along with the de-eroticization of the parent-child dynamic.'),(42,17,'2015-10-19 00:00:00',3,'The reintegration of empowerment fosters the idea of unsituated knowledge.'),(43,18,'2015-10-19 00:00:00',3,'The invention of representational familiarity may be taken as the sublimation of the Other.'),(44,19,'2015-10-19 00:00:00',3,'The fantasy of power is, in the most fundamental sense, the appropriation of unsituated knowledge.'),(45,20,'2015-10-19 00:00:00',3,'The authentication of the private is symptomatic of the divisibility of pedagogical institutions.'),(46,1,'2015-10-20 00:00:00',4,'string string string string!'),(47,1,'2015-10-20 00:00:00',5,'string string string string!'),(53,1,'2015-10-22 20:21:03',24,'test! Test! TEST! '),(54,1,'2015-10-22 20:23:53',25,'How did Bob ended up knee deep in water? Just the day before'),(55,2,'2015-10-22 20:32:16',25,'he had inspected all the pipes in the house'),(56,2,'2015-10-22 20:55:51',4,'Crazy! Crazy! Crazy! Crazy! Crazy! Crazy! Crazy! '),(57,3,'2015-10-22 21:00:49',25,'and they were full of slimy sea snakes'),(58,3,'2015-10-22 21:01:58',4,'lolololololololololololololololololololololololololololololololololololololololol'),(59,1,'2015-10-22 21:03:54',26,'Why did the duck cross the street? Tom thinks that'),(60,1,'2015-10-22 21:52:18',27,'Is this going to work?'),(61,4,'2015-10-22 22:28:37',4,'Trying to tie up this story!'),(62,5,'2015-10-22 22:31:30',4,'Trying to learn how to count'),(63,6,'2015-10-22 22:34:14',4,'Trying to... whatever'),(64,7,'2015-10-22 22:39:51',4,'One story full of testing'),(65,1,'2015-10-23 15:35:58',28,'kldfakjf'),(66,1,'2015-10-23 16:52:06',29,'hello!');
/*!40000 ALTER TABLE `Lines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Stories`
--

DROP TABLE IF EXISTS `Stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Stories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `rating` int(11) NOT NULL,
  `incomplete` tinyint(1) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stories`
--

LOCK TABLES `Stories` WRITE;
/*!40000 ALTER TABLE `Stories` DISABLE KEYS */;
INSERT INTO `Stories` VALUES (1,'2015-10-19 00:00:00',2,0,15),(2,'2015-10-19 00:00:00',3,0,10),(3,'2015-10-19 00:00:00',0,0,20),(4,'2015-10-20 00:00:00',0,0,7),(5,'2015-10-19 00:00:00',0,1,10),(25,'2015-10-22 20:23:53',0,1,15),(26,'2015-10-22 21:03:54',0,1,15),(27,'2015-10-22 21:52:18',0,1,10),(28,'2015-10-23 15:35:58',0,1,10),(29,'2015-10-23 16:52:06',0,1,10);
/*!40000 ALTER TABLE `Stories` ENABLE KEYS */;
UNLOCK TABLES;

