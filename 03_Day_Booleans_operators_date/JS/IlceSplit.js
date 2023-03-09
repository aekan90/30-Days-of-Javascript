class ILCE {
  constructor(kod, aciklama, ilkod) {
    this.KOD = kod;
    this.ACIKLAMA = aciklama;
    this.ILKOD = ilkod;
  }
}



var veriler = `1285    Doğanhisar  42
1286    Doğanşehir  44
1287    Doğubayazıt 4
1288    Domaniç 43
1289    Dörtyol 31
1290    Durağan 57
1291    Dursunbey   10
1292    Düzce Merkez    81
1293    Eceabat 17
1294    Edremit / Balıkesir 10
1295    Edirne Merkez   22
1296    Eflani  78
1297    Eğirdir 32
1298    Elazığ Merkez   23
1299    Elbistan    46
1300    Eldivan 18
1301    Eleşkirt    4
1302    Elmadağ 6
1303    Elmalı  7
1304    Emet    43
1305    Eminönü 34
1306    Emirdağ 3
1307    Enez    22
1308    Erbaa   60
1309    Erciş   65
1310    Erdek   10
1311    Erdemli 33
1312    Ereğli / Konya  42
1313    Ereğli / Zonguldak  67
1314    Erfelek 57
1315    Ergani  21
1316    Ermenek 70
1317    Eruh    56
1318    Erzincan Merkez 24
1319    Erzurum Merkez  25
1320    Espiye  28
1321    Eskipazar   78
1322    Eskişehir Merkez    26
1323    Eşme    64
1324    Eynesil 28
1325    Eyüp    34
1326    Ezine   17
1327    Fatih   34
1328    Fatsa   52
1329    Feke    1
1330    Felahiye    38
1331    Fethiye 48
1332    Fındıklı    53
1333    Finike  7
1334    Foça    35
1336    Gaziosmanpaşa   34
1337    Gazipaşa    7
1338    Gebze   41
1339    Gediz   43
1340    Gelibolu    17
1341    Gelendost   32
1342    Gemerek 58
1343    Gemlik  16
1344    Genç    12
1345    Gercüş  72
1346    Gerede  14
1347    Gerger  2
1348    Germencik   9
1349    Gerze   57
1350    Gevaş   65
1351    Geyve   54
1352    Giresun Merkez  28
1353    Göksun  46
1354    Gölbaşı / Adıyaman  2
1355    Gölcük  41
1356    Göle    75
1357    Gölhisar    15
1358    Gölköy  52
1359    Gölpazarı   11
1360    Gönen / Balıkesir   10
1361    Görele  28
1362    Gördes  45
1363    Göynücek    5
1364    Göynük  14
1365    Güdül   6
1366    Gülnar  33
1367    Gülşehir    50
1368    Gümüşhacıköy    5
1369    Gümüşhane Merkez    29
1370    Gündoğmuş   7
1371    Güney   20
1372    Gürpınar    65
1373    Gürün   58
1374    Hacıbektaş  50
1375    Hadim   42
1376    Hafik   58
1377    Hakkari Merkez  30
1378    Halfeti 63
1379    Hamur   4
1380    Hanak   75
1381    Hani    21
1382    Hassa   31
1383    Hatay Merkez    31
1384    Havran  10
1385    Havsa   22
1386    Havza   55
1387    Haymana 6
1388    Hayrabolu   59
1389    Hazro   21
1390    Hekimhan    44
1391    Hendek  54
1392    Hınıs   25
1393    Hilvan  63
1394    Hizan   13
1395    Hopa    8
1396    Horasan 25
1397    Hozat   62
1398    Iğdır Merkez    76
1399    Ilgaz   18
1400    Ilgın   42
1401    Isparta Merkez  32
1402    Mersin Merkez   33
1403    İdil    73
1404    İhsaniye    3
1405    İkizdere    53
1406    İliç    24
1407    İmranlı 58
1408    Gökçeada    17
1409    İncesu  38
1410    İnebolu 37
1411    İnegöl  16
1412    İpsala  22
1413    İskenderun  31
1414    İskilip 19
1415    İslahiye    27
1416    İspir   25
1418    İvrindi 10
1420    İznik   16
1421    Kadıköy 34
1422    Kadınhanı   42
1423    Kadirli 80
1424    Kağızman    36
1425    Kahta   2
1426    Kale / Denizli  20
1427    Kalecik 6
1428    Kalkandere  53
1429    Kaman   40
1430    Kandıra 41
1431    Kangal  58
1432    Karaburun   35
1433    Karabük Merkez  78
1434    Karacabey   16
1435    Karacasu    9
1436    Karahallı   64
1437    Karaisalı   1
1438    Karakoçan   23
1439    Karaman Merkez  70
1440    Karamürsel  41
1441    Karapınar   42
1442    Karasu  54
1443    Karataş 1
1444    Karayazı    25
1445    Kargı   19
1446    Karlıova    12
1447    Kars Merkez 36
1448    Karşıyaka   35
1449    Kartal  34
1450    Kastamonu Merkez    37
1451    Kaş 7
1452    Kavak   55
1453    Kaynarca    54
1455    Keban   23
1456    Keçiborlu   32
1457    Keles   16
1458    Kelkit  29
1459    Kemah   24
1460    Kemaliye    24
1461    Kemalpaşa / İzmir   35
1462    Kepsut  10
1463    Keskin  71
1464    Keşan   22
1465    Keşap   28
1466    Kıbrıscık   14
1467    Kınık   35
1468    Kırıkhan    31
1469    Kırıkkale Merkez    71
1470    Kırkağaç    45
1471    Kırklareli Merkez   39
1472    Kırşehir Merkez 40
1473    Kızılcahamam    6
1474    Kızıltepe   47
1475    Kiğı    12
1476    Kilis Merkez    79
1477    Kiraz   35
1478    Kocaeli Merkez  41
1479    Koçarlı 9
1480    Kofçaz  39
1482    Korgan  52
1483    Korkuteli   7
1484    Koyulhisar  58
1485    Kozaklı 50
1486    Kozan   1
1487    Kozluk  72
1488    Köyceğiz    48
1489    Kula    45
1490    Kulp    21
1491    Kulu    42
1492    Kumluca 7
1493    Kumru   52
1494    Kurşunlu    18
1495    Kurtalan    56
1496    Kurucaşile  74
1497    Kuşadası    9
1498    Kuyucak 9
1499    Küre    37
1500    Kütahya Merkez  43
1501    Ladik   55
1502    Lalapaşa    22
1503    Lapseki 17
1504    Lice    21
1505    Lüleburgaz  39
1506    Maden   23
1507    Maçka   61
1508    Mahmudiye   26
1509    Malatya Merkez  44
1510    Malazgirt   49
1511    Malkara 59
1512    Manavgat    7
1513    Manisa Merkez   45
1514    Manyas  10
1515    Kahramanmaraş Merkez    46
1516    Mardin Merkez   47
1517    Marmaris    48
1518    Mazgirt 62
1519    Mazıdağı    47
1520    Mecitözü    19
1521    Menemen 35
1522    Mengen  14
1523    Meriç   22
1524    Merzifon    5
1525    Mesudiye    52
1526    Midyat  47
1527    Mihalıççık  26
1528    Milas   48
1529    Mucur   40
1530    Mudanya 16
1531    Mudurnu 14
1532    Muğla Merkez    48
1533    Muradiye    65
1534    Muş Merkez  49
1535    Mustafakemalpaşa    16
1536    Mut 33
1537    Mutki   13
1538    Muratlı 59
1539    Nallıhan    6
1540    Narman  25
1541    Nazımiye    62
1542    Nazilli 9
1543    Nevşehir Merkez 50
1544    Niğde Merkez    51
1545    Niksar  60
1546    Nizip   27
1547    Nusaybin    47
1548    Of  61
1549    Oğuzeli 27
1550    Oltu    25
1551    Olur    25
1552    Ordu Merkez 52
1553    Orhaneli    16
1554    Orhangazi   16
1555    Orta    18
1556    Ortaköy / Çorum 19
1557    Ortaköy / Aksaray   68
1558    Osmancık    19
1559    Osmaneli    11
1560    Osmaniye Merkez 80
1561    Ovacık / Karabük    78
1562    Ovacık / Tunceli    62
1563    Ödemiş  35
1564    Ömerli  47
1565    Özalp   65
1566    Palu    23
1567    Pasinler    25
1568    Patnos  4
1569    Pazar / Rize    53
1570    Pazarcık    46
1571    Pazaryeri   11
1572    Pehlivanköy 39
1573    Perşembe    52
1574    Pertek  62
1575    Pervari 56
1576    Pınarbaşı / Kayseri 38
1577    Pınarhisar  39
1578    Polatlı 6
1579    Posof   75
1580    Pozantı 1
1581    Pülümür 62
1582    Pütürge 44
1583    Refahiye    24
1584    Reşadiye    60
1585    Reyhanlı    31
1586    Rize Merkez 53
1587    Safranbolu  78
1588    Saimbeyli   1
1589    Sakarya Merkez  54
1590    Salihli 45
1591    Samandağ    31
1592    Samsat  2
1593    Samsun Merkez   55
1594    Sandıklı    3
1595    Sapanca 54
1596    Saray / Tekirdağ    59
1597    Sarayköy    20
1598    Sarayönü    42
1599    Sarıcakaya  26
1600    Sarıgöl 45
1601    Sarıkamış   36
1602    Sarıkaya    66
1603    Sarıoğlan   38
1604    Sarıyer 34
1605    Sarız   38
1606    Saruhanlı   45
1607    Sason   72
1608    Savaştepe   10
1609    Savur   47
1610    Seben   14
1611    Seferihisar 35
1612    Selçuk  35
1613    Selendi 45
1614    Selim   36
1615    Senirkent   32
1616    Serik   7
1617    Seydişehir  42
1618    Seyitgazi   26
1619    Sındırgı    10
1620    Siirt Merkez    56
1621    Silifke 33
1622    Silivri 34
1623    Silopi  73
1624    Silvan  21
1625    Simav   43
1626    Sinanpaşa   3
1627    Sinop Merkez    57
1628    Sivas Merkez    58
1629    Sivaslı 64
1630    Siverek 63
1631    Sivrice 23
1632    Sivrihisar  26
1633    Solhan  12
1634    Soma    45
1635    Sorgun  66
1636    Söğüt   11
1637    Söke    9
1638    Sulakyurt   71
1639    Sultandağı  3
1640    Sultanhisar 9
1641    Suluova 5
1642    Sungurlu    19
1643    Suruç   63
1644    Susurluk    10
1645    Susuz   36
1646    Suşehri 58
1647    Sürmene 61
1648    Sütçüler    32
1649    Şabanözü    18
1650    Şarkışla    58
1651    Şarkikaraağaç   32
1652    Şarköy  59
1653    Şavşat  8
1654    Şebinkarahisar  28
1655    Şefaatli    66
1656    Şemdinli    30
1657    Şenkaya 25
1658    Şereflikoçhisar 6
1659    Şile    34
1660    Şiran   29
1661    Şırnak Merkez   73
1662    Şirvan  56
1663    Şişli   34
1664    Şuhut   3
1665    Tarsus  33
1666    Taşköprü    37
1667    Taşlıçay    4
1668    Taşova  5
1669    Tatvan  13
1670    Tavas   20
1671    Tavşanlı    43
1672    Tefenni 15
1673    Tekirdağ Merkez 59
1674    Tekman  25
1675    Tercan  24
1676    Terme   55
1677    Tire    35
1678    Tirebolu    28
1679    Tokat Merkez    60
1680    Tomarza 38
1681    Tonya   61
1682    Torbalı 35
1683    Tortum  25
1684    Torul   29
1685    Tosya   37
1686    Trabzon Merkez  61
1687    Tufanbeyli  1
1688    Tunceli Merkez  62
1689    Turgutlu    45
1690    Turhal  60
1691    Tutak   4
1692    Tuzluca 76
1693    Türkeli 57
1694    Türkoğlu    46
1695    Ula 48
1696    Ulubey / Ordu   52
1697    Ulubey / Uşak   64
1698    Uludere 73
1699    Uluborlu    32
1700    Ulukışla    51
1701    Ulus    74
1702    Şanlıurfa Merkez    63
1703    Urla    35
1704    Uşak Merkez 64
1705    Uzunköprü   22
1706    Ünye    52
1707    Ürgüp   50
1708    Üsküdar 34
1709    Vakfıkebir  61
1710    Van Merkez  65
1711    Varto   49
1712    Vezirköprü  55
1713    Viranşehir  63
1714    Vize    39
1715    Yahyalı 38
1716    Yalova Merkez   77
1717    Yalvaç  32
1718    Yapraklı    18
1719    Yatağan 48
1720    Yavuzeli    27
1721    Yayladağı   31
1722    Yenice / Çanakkale  17
1723    Yenimahalle 6
1724    Yenipazar / Aydın   9
1725    Yenişehir / Bursa   16
1726    Yerköy  66
1727    Yeşilhisar  38
1728    Yeşilova    15
1729    Yeşilyurt / Malatya 44
1730    Yığılca 81
1731    Yıldızeli   58
1732    Yomra   61
1733    Yozgat Merkez   66
1734    Yumurtalık  1
1735    Yunak   42
1736    Yusufeli    8
1737    Yüksekova   30
1738    Zara    58
1739    Zeytinburnu 34
1740    Zile    60
1741    Zonguldak Merkez    67
1742    Dalaman 48
1743    Düziçi  80
1744    Gölbaşı / Ankara    6
1745    Keçiören    6
1746    Mamak   6
1747    Sincan  6
1748    Yüreğir 1
1749    Acıgöl  50
1750    Adaklı  12
1751    Ahmetli 45
1752    Akkışla 38
1753    Akören  42
1754    Akpınar 40
1755    Aksu / Isparta  32
1756    Akyaka  36
1757    Aladağ  1
1758    Alaplı  67
1759    Alpu    26
1760    Altınekin   42
1761    Amasra  74
1762    Arıcak  23
1763    Asarcık 55
1764    Aslanapa    43
1765    Atkaracalar 18
1766    Aydıncık / Mersin   33
1767    Aydıntepe   69
1768    Ayrancı 70
1769    Babadağ 20
1770    Bahçesaray  65
1771    Başmakçı    3
1772    Battalgazi  44
1773    Bayat / Afyonkarahisar  3
1774    Bekilli 20
1775    Beşikdüzü   61
1776    Beydağ  35
1777    Beylikova   26
1778    Boğazkale   19
1779    Bozyazı 33
1780    Buca    35
1781    Buharkent   9
1782    Büyükçekmece    34
1783    Büyükorhan  16
1784    Cumayeri    81
1785    Çağlayancerit   46
1786    Çaldıran    65
1787    Dargeçit    47
1788    Demirözü    69
1789    Derebucak   42
1790    Dumlupınar  43
1791    Eğil    21
1792    Erzin   31
1793    Gölmarmara  45
1794    Gölyaka 81
1795    Gülyalı 52
1796    Güneysu 53
1797    Gürgentepe  52
1798    Güroymak    13
1799    Harmancık   16
1800    Harran  63
1801    Hasköy  49
1802    Hisarcık    43
1803    Honaz   20
1804    Hüyük   42
1805    İhsangazi   37
1806    İmamoğlu    1
1807    İncirliova  9
1808    İnönü   26
1809    İscehisar   3
1810    Kağıthane   34
1811    Demre   7
1812    Karaçoban   25
1813    Karamanlı   15
1814    Karatay 42
1815    Kazan   6
1816    Kemer / Burdur  15
1817    Kızılırmak  18
1818    Kocaali 54
1819    Konak   35
1820    Kovancılar  23
1821    Körfez  41
1822    Köse    29
1823    Küçükçekmece    34
1824    Marmara 10
1825    Marmaraereğlisi 59
1826    Menderes    35
1827    Meram   42
1828    Murgul  8
1829    Nilüfer 16
1830    19 Mayıs    55
1831    Ortaca  48
1832    Osmangazi   16
1833    Pamukova    54
1834    Pazar / Tokat   60
1835    Pendik  34
1836    Pınarbaşı / Kastamonu   37
1837    Piraziz 28
1838    Salıpazarı  55
1839    Selçuklu    42
1840    Serinhisar  20
1841    Şahinbey    27
1842    Şalpazarı   61
1843    Şaphane 43
1844    Şehitkamil  27
1845    Şenpazar    37
1846    Talas   38
1847    Taraklı 54
1848    Taşkent 42
1849    Tekkeköy    55
1850    Uğurludağ   19
1851    Uzundere    25
1852    Ümraniye    34
1853    Üzümlü  24
1854    Yağlıdere   28
1855    Yayladere   12
1856    Yenice / Karabük    78
1857    Yenipazar / Bilecik 11
1858    Yeşilyurt / Tokat   60
1859    Yıldırım    16
1860    Ağaçören    68
1861    Güzelyurt   68
1862    Kazımkarabekir  70
1863    Kocasinan   38
1864    Melikgazi   38
1865    Pazaryolu   25
1866    Sarıyahşi   68
1867    Ağlı    37
1868    Ahırlı  42
1869    Akçakent    40
1870    Akıncılar   58
1871    Pamukkale   20
1872    Akyurt  6
1873    Alacakaya   23
1874    Altınyayla / Burdur 15
1875    Altınyayla / Sivas  58
1876    Altunhisar  51
1877    Aydıncık / Yozgat   66
1878    Tillo   56
1879    Ayvacık / Samsun    55
1880    Bahşili 71
1881    Baklan  20
1882    Balışeyh    71
1883    Başçiftlik  60
1884    Başyayla    70
1885    Bayramören  18
1886    Bayrampaşa  34
1887    Belen   31
1888    Beyağaç 20
1889    Bozkurt / Denizli   20
1890    Boztepe 40
1891    Çamaş   52
1892    Çamlıyayla  33
1893    Çamoluk 28
1894    Çanakçı 28
1895    Çandır  66
1896    Çarşıbaşı   61
1897    Çatalpınar  52
1898    Çavdarhisar 43
1899    Çavdır  15
1900    Çaybaşı 52
1901    Çelebi  71
1902    Çeltik  42
1903    Çeltikçi    15
1904    Çiftlik 51
1905    Çilimli 81
1906    Çobanlar    3
1907    Derbent 42
1908    Derepazarı  53
1909    Dernekpazarı    61
1910    Dikmen  57
1911    Dodurga 19
1912    Doğankent   28
1913    Doğanşar    58
1914    Doğanyol    44
1915    Doğanyurt   37
1916    Dörtdivan   14
1917    Düzköy  61
1918    Edremit / Van   65
1919    Ekinözü 46
1920    Emirgazi    42
1921    Eskil   68
1922    Etimesgut   6
1923    Evciler 3
1924    Evren   6
1925    Ferizli 54
1926    Gökçebey    67
1927    Gölova  58
1928    Gömeç   10
1929    Gönen / Isparta 32
1930    Güce    28
1931    Güçlükonak  73
1932    Gülağaç 68
1933    Güneysınır  42
1934    Günyüzü 26
1935    Gürsu   16
1936    Hacılar 38
1937    Halkapınar  42
1938    Hamamözü    5
1939    Han 26
1940    Hanönü  37
1941    Hasankeyf   72
1942    Hayrat  61
1943    Hemşin  53
1944    Hocalar 3
1945    Aziziye 25
1946    İbradı  7
1947    İkizce  52
1948    İnhisar 11
1949    İyidere 53
1950    Kabadüz 52
1951    Kabataş 52
1952    Kadışehri   66
1953    Kale / Malatya  44
1954    Karakeçili  71
1955    Karapürçek  54
1956    Karkamış    27
1957    Karpuzlu    9
1958    Kavaklıdere 48
1959    Kemer / Antalya 7
1960    Kestel  16
1961    Kızılören   3
1962    Kocaköy 21
1963    Korgun  18
1964    Korkut  49
1965    Köprübaşı / Manisa  45
1966    Köprübaşı / Trabzon 61
1967    Köprüköy    25
1968    Köşk    9
1969    Kuluncak    44
1970    Kumlu   31
1971    Kürtün  29
1972    Laçin   19
1973    Mihalgazi   26
1974    Nurdağı 27
1975    Nurhak  46
1976    Oğuzlar 19
1977    Otlukbeli   24
1978    Özvatan 38
1979    Pazarlar    43
1980    Saray / Van 65
1981    Saraydüzü   57
1982    Saraykent   66
1983    Sarıveliler 70
1984    Seydiler    37
1985    Sincik  2
1986    Söğütlü 54
1987    Sulusaray   60
1988    Süloğlu 22
1989    Tut 2
1990    Tuzlukçu    42
1991    Ulaş    58
1992    Yahşihan    71
1993    Yakakent    55
1994    Yalıhüyük   42
1995    Yazıhan 44
1996    Yedisu  12
1997    Yeniçağa    14
1998    Yenifakılı  66
2000    Didim   9
2001    Yenişarbademli  32
2002    Yeşilli 47
2003    Avcılar 34
2004    Bağcılar    34
2005    Bahçelievler    34
2006    Balçova 35
2007    Çiğli   35
2008    Damal   75
2009    Gaziemir    35
2010    Güngören    34
2011    Karakoyunlu 76
2012    Maltepe 34
2013    Narlıdere   35
2014    Sultanbeyli 34
2015    Tuzla   34
2016    Esenler 34
2017    Gümüşova    81
2018    Güzelbahçe  35
2019    Altınova    77
2020    Armutlu 77
2021    Çınarcık    77
2022    Çiftlikköy  77
2023    Elbeyli 79
2024    Musabeyli   79
2025    Polateli    79
2026    Termal  77
2027    Hasanbeyli  80
2028    Sumbas  80
2029    Toprakkale  80
2030    Derince 41
2031    Kaynaşlı    81
2032    Sarıçam 1
2033    Çukurova    1
2034    Pursaklar   6
2035    Aksu / Antalya  7
2036    Döşemealtı  7
2037    Kepez   7
2038    Konyaaltı   7
2039    Muratpaşa   7
2040    Bağlarcı    21
2041    Kayapınar   21
2042    Sur 21
2043    Yenişehir / Diyarbakır  21
2044    Palandöken  25
2045    Yakutiye    25
2046    Odunpazarı  26
2047    Tepebaşı    26
2048    Arnavutköy  34
2049    Ataşehir    34
2050    Başakşehir  34
2051    Beylikdüzü  34
2052    Çekmeköy    34
2053    Esenyurt    34
2054    Sancaktepe  34
2055    Sultangazi  34
2056    Bayraklı    35
2057    Karabağlar  35
2058    Başiskele   41
2059    Çayırova    41
2060    Darıca  41
2061    Dilovası    41
2062    İzmit   41
2063    Kartepe 41
2064    Akdeniz 33
2065    Mezitli 33
2066    Toroslar    33
2067    Yenişehir / Mersin  33
2068    Adapazarı   54
2069    Arifiye 54
2070    Erenler 54
2071    Serdivan    54
2072    Atakum  55
2073    Canik   55
2074    İlkadım 55
2076    Efeler  9
2077    Altıeylül   10
2078    Karesi  10
2079    Merkezefendi    20
2080    Antakya 31
2081    Arsuz   31
2082    Defne   31
2083    Payas   31
2084    Dulkadiroğlu    46
2085    Onikişubat  46
2086    Şehzadeler  45
2087    Yunusemre   45
2088    Artuklu 47
2089    Menteşe 48
2090    Seydikemer  48
2091    Eyyübiye    63
2092    Haliliye    63
2093    Karaköprü   63
2094    Ergene  59
2095    Kapaklı 59
2096    Süleymanpaşa    59
2097    Ortahisar   61
2098    İpekyolu    65
2099    Tuşba   65
2100    Kilimli 67
2101    Kozlu   67
2103    Altınordu   52
2105    Kemalpaşa / Artvin  8
2106    Sultanhanı  68
4444    Kiosk   6
5550    TBMM    6
5555    Genel Müdürlük (5555)   6
5556    Genel Müdürlük (5556)   6
6666    Genel Müdürlük  6
6667    Genel Müdürlük (6667)   6
6700    Genel Müdürlük (6700)   6
6800    Genel Müdürlük (6800)   6
7777    Genel Müdürlük (7777)   6
9998    Hasanoğlan  6`;

var ilceNesneleri = []; // ilce nesnelerimizi içereceğimiz boş dizi

var satirlar = veriler.split("\n"); // verilerimizi satırlara ayıralım

// her satırı ayrıştırıp ilce nesneleri oluşturalım
for (var i = 0; i < satirlar.length; i++) {
  var satir = satirlar[i].trim();
  if (satir !== "") {
    var hucreler = satir.split(/\s+/); // satırdaki hücreleri ayrıştır
    var ilce = new ILCE(); // yeni bir ilce nesnesi oluştur
    ilce.KOD = parseInt(hucreler[0]);
    ilce.ACIKLAMA = hucreler[1];
    //ilce.ILKOD = parseInt(hucreler[2]);
    isNaN(hucreler[2]) ? "23" : parseInt(hucreler[2])
    ilceNesneleri.push(ilce); // ilce nesnesini diziye ekle
  }
  // HTML'de ILCE nesnelerini yazdırma
  let html = "<table><thead><tr><th>KOD</th><th>ACIKLAMA</th><th>ILKOD</th></tr></thead><tbody>";
  for (let i = 0; i < ilceNesneleri.length; i++) {


    html += "<tr>";
    html += "<td>\tnew ILCE() {KOD=" + ilceNesneleri[i].KOD + ', ACIKLAMA="' + ilceNesneleri[i].ACIKLAMA + '", ILKOD=' + ilceNesneleri[i].ILKOD + ' },</td>';
    html += "</tr>";

  }
  html += "</tbody></table>";

  document.getElementById("ilceListesi").innerHTML = html;
}

// new ILCE() {KOD=1278, ACIKLAMA="Dicle", ILKOD=21 },

