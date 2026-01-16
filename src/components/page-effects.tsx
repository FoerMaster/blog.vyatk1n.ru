'use client';

export function PageEffects() {
    return (
        <>
            {/* Фоновые эффекты */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Пульсирующий источник света */}
                <div
                    className="absolute top-0 left-1/2 w-[600px] h-[400px] rounded-full blur-3xl"
                    style={{
                        transform: 'translateX(-50%)',
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                        animation: 'pulseLight 4s ease-in-out infinite',
                    }}
                />

                {/* Эффект зернистости */}
                <div
                    className="absolute inset-0"
                    style={{
                        opacity: 0.015,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                    }}
                />
            </div>

            {/* Глобальные стили для анимации - вставляем один раз */}
            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes pulseLight {
            0%, 100% {
              opacity: 0.15;
              transform: translate(-50%, 0) scale(1);
            }
            50% {
              opacity: 0.25;
              transform: translate(-50%, -10px) scale(1.05);
            }
          }
        `
            }} />
        </>
    );
}