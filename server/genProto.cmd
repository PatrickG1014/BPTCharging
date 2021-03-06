CALL:genProto charging

goto:eof

:genProto

SET DOMAIN=%~1
SET PROTO_PATH=.\%DOMAIN%\api
SET GO_OUT_PATH=.\%DOMAIN%\api\gen\v1
CALL MKDIR %GO_OUT_PATH%

protoc -I="%PROTO_PATH%" --go_out="paths=source_relative:%GO_OUT_PATH%" %DOMAIN%.proto
protoc -I="%PROTO_PATH%" --go-grpc_out="paths=source_relative:%GO_OUT_PATH%" %DOMAIN%.proto
protoc -I="%PROTO_PATH%" --grpc-gateway_out="paths=source_relative,grpc_api_configuration=%PROTO_PATH%\%DOMAIN%.yaml:%GO_OUT_PATH%" %DOMAIN%.proto

SET PBTS_BIN_DIR=..\wx\miniprogram\node_modules\.bin
SET PBTS_OUT_DIR=..\wx\miniprogram\service\proto_gen\%DOMAIN%
CALL MKDIR %PBTS_OUT_DIR%
CALL %PBTS_BIN_DIR%\pbjs -t static -w es6 %PROTO_PATH%\%DOMAIN%.proto --no-create --no-encode --no-decode --no-verify --no-delimited -o %PBTS_OUT_DIR%\%DOMAIN%_pb_tmp.js
CALL ECHO import * as $protobuf from "protobufjs"; > %PBTS_OUT_DIR%\%DOMAIN%_pb.js
CALL ECHO. >> %PBTS_OUT_DIR%\%DOMAIN%_pb.js
CALL TYPE %PBTS_OUT_DIR%\%DOMAIN%_pb_tmp.js >> %PBTS_OUT_DIR%\%DOMAIN%_pb.js
CALL DEL %PBTS_OUT_DIR%\%DOMAIN%_pb_tmp.js
CALL %PBTS_BIN_DIR%\pbts -o %PBTS_OUT_DIR%\%DOMAIN%_pb.d.ts %PBTS_OUT_DIR%\%DOMAIN%_pb.js

goto:eof
