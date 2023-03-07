puts "RiskLevel >>>"
RiskLevel.find_or_create_by(name: 'NÃO CLASSIFICADO')
RiskLevel.find_or_create_by(name: 'SUPERADO')
RiskLevel.find_or_create_by(name: 'BAIXO')
RiskLevel.find_or_create_by(name: 'MÉDIO')
RiskLevel.find_or_create_by(name: 'ALTO')
RiskLevel.find_or_create_by(name: 'SUPER ALTO')
