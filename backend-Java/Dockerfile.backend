FROM maven:3.6.0-jdk-11-slim as java-builder

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn package

FROM adoptopenjdk/openjdk11:alpine-slim
WORKDIR /app
COPY --from=java-builder /build/target/backend-1.0-SNAPSHOT.jar /app/

ENTRYPOINT ["java", "-jar", "backend-1.0-SNAPSHOT.jar"]

EXPOSE 8080

