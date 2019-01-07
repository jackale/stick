FROM microsoft/dotnet

WORKDIR /app

# プロジェクトをコピーして別のレイヤーで復元します。
COPY app/*.csproj ./
RUN dotnet restore

# 全てコピーしてビルドします。
COPY ./app ./
RUN dotnet publish -c Release -o out

ENTRYPOINT ["dotnet", "out/app.dll"]
