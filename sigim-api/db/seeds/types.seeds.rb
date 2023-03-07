puts "ProtectiveMeasureType >>>"
ProtectiveMeasureType.find_or_create_by(name: 'Afastamento do agressor do lar, domicílio ou local de convivência com a ofendida;')
ProtectiveMeasureType.find_or_create_by(name: 'Proibição de aproximação com a ofendida, fixando o limite de distância do agressor ou contato por qualquer meio de comunicação;')
ProtectiveMeasureType.find_or_create_by(name: 'Proibição de frequentar a casa da vítima e determinados lugares a fim de preservar a intergridade física e psicológica da ofendida;')
ProtectiveMeasureType.find_or_create_by(name: 'Determinar a recondução da ofendida e a seus dependentes ao respectivo domicílio;')
ProtectiveMeasureType.find_or_create_by(name: 'Suspensão da posse ou restrião do porte de armas do agressor;')
ProtectiveMeasureType.find_or_create_by(name: 'Restrição ou suspensão de visitas aos dependentes menores, ouvida a equipe de atendimento multidisciplinar ou serviço similar;')
ProtectiveMeasureType.find_or_create_by(name: 'Prestação de alimentos provisionais ou provisórios;')
ProtectiveMeasureType.find_or_create_by(name: 'Encaminhamento seu e seus dependentes a programa oficial ou comunitário de proteção ou atendimento;')
ProtectiveMeasureType.find_or_create_by(name: 'Determinar o afastamento da ofendida do lar, sem prejuízo dos direitos relativos a bens, guarda dos filhos e alimentação;')
ProtectiveMeasureType.find_or_create_by(name: 'Restituição de bens e/ou objetos pessoais da ofendida indevidamente subtraído(s) pelo agressor;')
ProtectiveMeasureType.find_or_create_by(name: 'Proibição temporária para a celebração de atos e contratos de compra, venda e colocação de propriedade comum, salvo expressa autorização judicial;')
ProtectiveMeasureType.find_or_create_by(name: 'Suspensão das procurações conferidas pela ofendida ao agressor;')
ProtectiveMeasureType.find_or_create_by(name: 'Prestação de caução provisória, mediante depósito judicial, por perdas e danos materiais, decorrentes da prática de violência doméstica e familiar contra a ofendida;')
ProtectiveMeasureType.find_or_create_by(name: 'Proibição de divulgação na internet, para conhecidos e desconhecidos, de imagem e vídeos íntimos da vítima, bem como postagens que se refiram à vítima;')
ProtectiveMeasureType.find_or_create_by(name: 'Nomeação de Defensor Público atuante na correspondente Vara Criminal a fim de acompanhar todos os atos processuais, inclusive no presente pedido de medida protetiva (arts. 27 e 28 da Lei nº 11.340/2006);')
ProtectiveMeasureType.find_or_create_by(name: 'Deseja receber senha do processo no ato da intimação pelo Whatsapp;')

puts "Ethnicity >>>"
Ethnicity.find_or_create_by(name: 'Não informado')
Ethnicity.find_or_create_by(name: 'BRANCA')
Ethnicity.find_or_create_by(name: 'NEGRA')
Ethnicity.find_or_create_by(name: 'MUÇULMANA')
Ethnicity.find_or_create_by(name: 'INDÍGENA')

puts "Breed >>>"
Breed.find_or_create_by(name: 'Não informado')
Breed.find_or_create_by(name: 'AMARELA')
Breed.find_or_create_by(name: 'BRANCA')
Breed.find_or_create_by(name: 'INDÍGENA')
Breed.find_or_create_by(name: 'PARDA')
Breed.find_or_create_by(name: 'PRETA')

puts "SkinColor >>>"
SkinColor.find_or_create_by(name: 'Não informado')
SkinColor.find_or_create_by(name: 'BRANCA')
SkinColor.find_or_create_by(name: 'MORENA CLARA')
SkinColor.find_or_create_by(name: 'MORENA MODERADA')
SkinColor.find_or_create_by(name: 'MORENA ESCURA')
SkinColor.find_or_create_by(name: 'NEGRA')

puts "Scholarity >>>"
Scholarity.find_or_create_by(name: 'Não informado')
Scholarity.find_or_create_by(name: 'SEM ESCOLARIDADE')
Scholarity.find_or_create_by(name: 'FUNDAMENTAL INCOMPLETO')
Scholarity.find_or_create_by(name: 'FUNDAMENTAL COMPLETO')
Scholarity.find_or_create_by(name: 'MÉDIO INCOMPLETO')
Scholarity.find_or_create_by(name: 'MÉDIO COMPLETO')
Scholarity.find_or_create_by(name: 'SUPERIOR INCOMPLETO')
Scholarity.find_or_create_by(name: 'SUPERIOR COMPLETO')
Scholarity.find_or_create_by(name: 'ESPECIALIZAÇÃO')
Scholarity.find_or_create_by(name: 'MESTRADO')
Scholarity.find_or_create_by(name: 'DOUTORADO')
Scholarity.find_or_create_by(name: 'PÓS-DOUTORADO')
Scholarity.find_or_create_by(name: 'PÓS-GRADUAÇÃO')
Scholarity.find_or_create_by(name: 'ALFABETIZADO')

puts "Gender >>>"
Gender.find_or_create_by(name: 'Não informado')
Gender.find_or_create_by(name: 'FEMININO')
Gender.find_or_create_by(name: 'MASCULINO')

puts "GenderIdentity >>>"
GenderIdentity.find_or_create_by(name: 'Não informado')
GenderIdentity.find_or_create_by(name: 'CISGÊNERO')
GenderIdentity.find_or_create_by(name: 'INTERSEXO')
GenderIdentity.find_or_create_by(name: 'TRANSSEXUAL')
GenderIdentity.find_or_create_by(name: 'TRAVESTI')

puts "SexualOrientation >>>"
SexualOrientation.find_or_create_by(name: 'Não informado')
SexualOrientation.find_or_create_by(name: 'HETEROSSEXUAL')
SexualOrientation.find_or_create_by(name: 'HOMOSSEXUAL')
SexualOrientation.find_or_create_by(name: 'ASSEXUAL')
SexualOrientation.find_or_create_by(name: 'BISSEXUAL')
SexualOrientation.find_or_create_by(name: 'LÉSBICA')
SexualOrientation.find_or_create_by(name: 'PANSEXUAL')

puts "ContactType >>>"
ContactType.find_or_create_by(name: 'TELEFONE FIXO')
ContactType.find_or_create_by(name: 'CELULAR')
ContactType.find_or_create_by(name: 'E-MAIL')
ContactType.find_or_create_by(name: 'FAX')
ContactType.find_or_create_by(name: 'CAIXA POSTAL')
ContactType.find_or_create_by(name: 'OUTRO')

puts "RelationshipDegree >>>"
RelationshipDegree.find_or_create_by(name: 'MÃE')
RelationshipDegree.find_or_create_by(name: 'PAI')
RelationshipDegree.find_or_create_by(name: 'IRMÃ')
RelationshipDegree.find_or_create_by(name: 'IRMÃO')
RelationshipDegree.find_or_create_by(name: 'FILHA')
RelationshipDegree.find_or_create_by(name: 'FILHO')
RelationshipDegree.find_or_create_by(name: 'TIA')
RelationshipDegree.find_or_create_by(name: 'TIO')
RelationshipDegree.find_or_create_by(name: 'ESPOSA')
RelationshipDegree.find_or_create_by(name: 'EX-ESPOSA')
RelationshipDegree.find_or_create_by(name: 'ESPOSO')
RelationshipDegree.find_or_create_by(name: 'EX-ESPOSO')
RelationshipDegree.find_or_create_by(name: 'AVÓ')
RelationshipDegree.find_or_create_by(name: 'AVÔ')
RelationshipDegree.find_or_create_by(name: 'MADASTRA')
RelationshipDegree.find_or_create_by(name: 'EX-MADASTRA')
RelationshipDegree.find_or_create_by(name: 'PADRASTO')
RelationshipDegree.find_or_create_by(name: 'EX-PADRASTO')
RelationshipDegree.find_or_create_by(name: 'PRIMA')
RelationshipDegree.find_or_create_by(name: 'PRIMO')
RelationshipDegree.find_or_create_by(name: 'CUNHADO(A)')
RelationshipDegree.find_or_create_by(name: 'EX-CUNHADO(A)')
RelationshipDegree.find_or_create_by(name: 'SOGRO(A)')
RelationshipDegree.find_or_create_by(name: 'EX-SOGRO(A)')
RelationshipDegree.find_or_create_by(name: 'NAMORADO(A)')
RelationshipDegree.find_or_create_by(name: 'EX-NAMORADO(A)')

puts "ViolenceType >>>"
ViolenceType.find_or_create_by(name: 'Não informado')
ViolenceType.find_or_create_by(name: 'FÍSICA')
ViolenceType.find_or_create_by(name: 'PSICOLÓGICA')
ViolenceType.find_or_create_by(name: 'SEXUAL')
ViolenceType.find_or_create_by(name: 'PATRIMONIAL')
ViolenceType.find_or_create_by(name: 'PSICOLÓGICA')
ViolenceType.find_or_create_by(name: 'MORAL')
ViolenceType.find_or_create_by(name: 'NEGLIGÊNCIA E/OU ABANDONO')
ViolenceType.find_or_create_by(name: 'MAUS TRATOS')
ViolenceType.find_or_create_by(name: 'HOMICÍDIO')
ViolenceType.find_or_create_by(name: 'OUTROS')

puts "ViolenceMotivation >>>"
ViolenceMotivation.find_or_create_by(name: 'Não informado')
ViolenceMotivation.find_or_create_by(name: 'ÁLCOOL E OUTRAS DROGAS')
ViolenceMotivation.find_or_create_by(name: 'CIÚME')
ViolenceMotivation.find_or_create_by(name: 'SEPARAÇÃO')
ViolenceMotivation.find_or_create_by(name: 'VINGANÇA')
ViolenceMotivation.find_or_create_by(name: 'OUTROS')

puts "CrimeType >>>"
CrimeType.find_or_create_by(name: 'Não informado')
CrimeType.find_or_create_by(name: 'Homicídio (Art. 121)')
CrimeType.find_or_create_by(name: 'Feminicídio (Art. 121, VI)')
CrimeType.find_or_create_by(name: 'Aborto provocado por terceiro (Art. 125)')
CrimeType.find_or_create_by(name: 'Lesão Corporal (Art. 129)')
CrimeType.find_or_create_by(name: 'Lesão Corporal seguida de morte (art. 129, §3º)')
CrimeType.find_or_create_by(name: 'Lesão Corporal com Violência Doméstica (Art. 129, §9º)')
CrimeType.find_or_create_by(name: 'Perigo do Contágio Venéreo (Art. 130)')
CrimeType.find_or_create_by(name: 'Perigo do Contágio de Moléstia Grave (Art. 131)')
CrimeType.find_or_create_by(name: 'Perigo para a Vida ou saúde de outrem (Art. 132)')
CrimeType.find_or_create_by(name: 'Abandono de Incapaz (Art. 133)')
CrimeType.find_or_create_by(name: 'Omissão de Socorro (Art. 135)')
CrimeType.find_or_create_by(name: 'Maus-tratos (Art. 136)')
CrimeType.find_or_create_by(name: 'Calúnia (Art. 138)')
CrimeType.find_or_create_by(name: 'Difamação (Art. 139)')
CrimeType.find_or_create_by(name: 'Injúria (Art. 140)')
CrimeType.find_or_create_by(name: 'Constrangimento ilegal (Art. 146)')
CrimeType.find_or_create_by(name: 'Ameaça (Art. 147)')
CrimeType.find_or_create_by(name: 'Perseguição (Art. 147-A)')
CrimeType.find_or_create_by(name: 'Violência Psicológica contra a mulher (Art. 147-B)')
CrimeType.find_or_create_by(name: 'Sequestro e cárcere privado (Art. 148)')
CrimeType.find_or_create_by(name: 'Tráfico de Pessoas (Art. 149-A)')
CrimeType.find_or_create_by(name: 'Violação de Domicílio (Art. 150)')
CrimeType.find_or_create_by(name: 'Invasão de Dispositivo Informático (Art. 154-A)')
CrimeType.find_or_create_by(name: 'Dano (Art. 163)')
CrimeType.find_or_create_by(name: 'Apropriação Indébita (Art. 168)')
CrimeType.find_or_create_by(name: 'Abuso de Incapaz (Art. 173)')
CrimeType.find_or_create_by(name: 'Estupro (Art. 213)')
CrimeType.find_or_create_by(name: 'Violência Sexual mediante fraude (Art. 215)')
CrimeType.find_or_create_by(name: 'Importunação Sexual (Art. 215-A)')
CrimeType.find_or_create_by(name: 'Registro não autorizado da intimidade sexual (Art. 216-B)')
CrimeType.find_or_create_by(name: 'Estupro de Vulnerável (Art. 217-A, §1º)')
CrimeType.find_or_create_by(name: 'Estupro Coletivo (Art. 226, IV, a)')
CrimeType.find_or_create_by(name: 'Estupro Corretivo (Art. 226, IV, b)')
CrimeType.find_or_create_by(name: 'Mediação para servir a lascívia de outrem (Art. 227)')
CrimeType.find_or_create_by(name: 'Favorecimento da prostituição ou outra forma de exploração sexual (Art. 228)')

puts "CivilStatus >>>"
CivilStatus.find_or_create_by(name: 'Não informado')
CivilStatus.find_or_create_by(name: 'CASADA')
CivilStatus.find_or_create_by(name: 'DIVORCIADA')
CivilStatus.find_or_create_by(name: 'UNIÃO ESTÁVEL')
CivilStatus.find_or_create_by(name: 'SEPARADA')
CivilStatus.find_or_create_by(name: 'SOLTEIRA')
CivilStatus.find_or_create_by(name: 'VIÚVA')
CivilStatus.find_or_create_by(name: 'OUTROS')

puts "Community >>>"
c = City.find_by(name: 'FORTALEZA')
Community.find_or_create_by(city_id: c.id, name: 'AEROPORTO')
Community.find_or_create_by(city_id: c.id, name: 'ALTO DA CORUJA')
Community.find_or_create_by(city_id: c.id, name: 'BARROSO')
Community.find_or_create_by(city_id: c.id, name: 'BOM FUTURO')
Community.find_or_create_by(city_id: c.id, name: 'CAÇA E PESCA')
Community.find_or_create_by(city_id: c.id, name: 'CACIMBA DOS POMBOS')
Community.find_or_create_by(city_id: c.id, name: 'CAMPO DO AMÉRICA')
Community.find_or_create_by(city_id: c.id, name: 'CAMPO DO BEIRA RIO')
Community.find_or_create_by(city_id: c.id, name: 'CAMPO DO GREMIO')
Community.find_or_create_by(city_id: c.id, name: 'CANIDEZINHO')
Community.find_or_create_by(city_id: c.id, name: 'CIPELC')
Community.find_or_create_by(city_id: c.id, name: 'COLONIA')
Community.find_or_create_by(city_id: c.id, name: 'CONJUNTO ESPERANÇA')
Community.find_or_create_by(city_id: c.id, name: 'COQUEIRINHO')
Community.find_or_create_by(city_id: c.id, name: 'COUTO FERNANDES')
Community.find_or_create_by(city_id: c.id, name: 'CROCOLANDIA')
Community.find_or_create_by(city_id: c.id, name: 'DAMAS')
Community.find_or_create_by(city_id: c.id, name: 'DEMÓCRITO ROCHA')
Community.find_or_create_by(city_id: c.id, name: 'FAVELA DO PAPOUCO')
Community.find_or_create_by(city_id: c.id, name: 'FAVELA MARROCOS')
Community.find_or_create_by(city_id: c.id, name: 'GARIBALDE')
Community.find_or_create_by(city_id: c.id, name: 'GRANJA LISBOA')
Community.find_or_create_by(city_id: c.id, name: 'GRANJA PORTUGAL')
Community.find_or_create_by(city_id: c.id, name: 'ITAOCA')
Community.find_or_create_by(city_id: c.id, name: 'ITAPERI')
Community.find_or_create_by(city_id: c.id, name: 'JAGATÁ')
Community.find_or_create_by(city_id: c.id, name: 'JARDIM AMERICA')
Community.find_or_create_by(city_id: c.id, name: 'JARDIM CEARENSE')
Community.find_or_create_by(city_id: c.id, name: 'JOSE BONIFÁCIO')
Community.find_or_create_by(city_id: c.id, name: 'MARAPONGA')
Community.find_or_create_by(city_id: c.id, name: 'MONTESE')
Community.find_or_create_by(city_id: c.id, name: 'MORRO DO GALO')
Community.find_or_create_by(city_id: c.id, name: 'MORRO DO OURO')
Community.find_or_create_by(city_id: c.id, name: 'PALMEIRAS')
Community.find_or_create_by(city_id: c.id, name: 'PAN AMERICANO')
Community.find_or_create_by(city_id: c.id, name: 'PARANGABA')
Community.find_or_create_by(city_id: c.id, name: 'PARQUE SANTA ROSA')
Community.find_or_create_by(city_id: c.id, name: 'PAU PELADO')
Community.find_or_create_by(city_id: c.id, name: 'QUADRAS')
Community.find_or_create_by(city_id: c.id, name: 'ROSALINA')
Community.find_or_create_by(city_id: c.id, name: 'SANTA MARIA')
Community.find_or_create_by(city_id: c.id, name: 'SERRINHA')
Community.find_or_create_by(city_id: c.id, name: 'TRILHOS')
Community.find_or_create_by(city_id: c.id, name: 'VILA PERI')
Community.find_or_create_by(city_id: c.id, name: 'VILA UNIÃO')

puts "Tipos de acompanhamentos >>>"
AccompanimentType.find_or_create_by(name: 'Educacional')#1
AccompanimentType.find_or_create_by(name: 'Policial')#2
AccompanimentType.find_or_create_by(name: 'Psicológico')#3
AccompanimentType.find_or_create_by(name: 'Médico')#4
AccompanimentType.find_or_create_by(name: 'Jurídico')#5
AccompanimentType.find_or_create_by(name: 'Assistência Social')#6

puts "Tipos de equipamentos >>>"
FacilityType.find_or_create_by(name: 'Escola')#1
FacilityType.find_or_create_by(name: 'Delegacia')#2
FacilityType.find_or_create_by(name: 'Clínica')#3
FacilityType.find_or_create_by(name: 'Hospital')#4
FacilityType.find_or_create_by(name: 'UPA')#5
FacilityType.find_or_create_by(name: 'Forum')#6
FacilityType.find_or_create_by(name: 'Centro de Referência')#7
FacilityType.find_or_create_by(name: 'Casa da Mulher')#8

puts "Sectorial >>>"
Sectorial.find_or_create_by(name: 'EDUCAÇÃO')#1
Sectorial.find_or_create_by(name: 'SEGURANÇA PÚBLICA')#2
Sectorial.find_or_create_by(name: 'SAÚDE')#3
Sectorial.find_or_create_by(name: 'JUSTIÇA')#4
Sectorial.find_or_create_by(name: 'ASSISTÊNCIA SOCIAL E MULHERES')#5

puts "HandicapType >>>"
HandicapType.find_or_create_by(name: 'Não informado')
HandicapType.find_or_create_by(name: 'Auditiva')
HandicapType.find_or_create_by(name: 'Física')
HandicapType.find_or_create_by(name: 'Intelectual')
HandicapType.find_or_create_by(name: 'Visual')
HandicapType.find_or_create_by(name: 'Outras')

puts "DependencyType >>>"
DependencyType.find_or_create_by(name: 'Não informado')
DependencyType.find_or_create_by(name: 'Financeira')
DependencyType.find_or_create_by(name: 'Emocional')

puts "HousingSituation >>>"
HousingSituation.find_or_create_by(name: 'Não informado')
HousingSituation.find_or_create_by(name: 'Próprio')
HousingSituation.find_or_create_by(name: 'Alugado')
HousingSituation.find_or_create_by(name: 'Cedido')
HousingSituation.find_or_create_by(name: 'Invadido')
HousingSituation.find_or_create_by(name: 'Situação de Rua')
HousingSituation.find_or_create_by(name: 'Em Abrigo')
