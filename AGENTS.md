<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# META_ACCESS_TOKEN 갱신 시 주의

`META_ACCESS_TOKEN`(Meta Graph API 60일 장수명 토큰, 현재 만료 2026-09-15)이 만료돼 재발급/갱신할 때는 **이 토큰이 다른 컨테이너(프로젝트)의 env에서도 사용 중**이므로, 반드시 사용자에게 "다른 컨테이너의 env 값도 함께 교체해야 한다"고 안내할 것. 이 저장소의 `.env`만 갱신하고 끝내면 안 된다.
