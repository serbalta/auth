# backend/Dockerfile

# JDK 17 görüntüsünü kullan
FROM openjdk:17-jdk-slim

# Çalışma dizinini ayarla
WORKDIR /app

# Maven wrapper ve pom.xml dosyasını kopyala
COPY mvnw ./
COPY .mvn .mvn
COPY pom.xml ./

# mvnw dosyasına çalıştırma izni ver
RUN chmod +x ./mvnw

# Bağımlılıkları indir
RUN ./mvnw dependency:resolve

# Uygulama kaynaklarını kopyala
COPY src ./src

# Uygulamayı derle
RUN ./mvnw package

# Uygulamayı çalıştır
CMD ["java", "-jar", "target/loginApp-0.0.1-SNAPSHOT.jar"]
