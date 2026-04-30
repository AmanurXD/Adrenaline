const https = require('https');

// ==============================================================================
// 📋 PASTE YOUR NEW CAPTURE BELOW (BETWEEN THE BACKTICKS)
// ==============================================================================
const RAW_CAPTURE = `
PATCH /members/providers/profile/available.json HTTP/2
Host: app.tryst.link
Cookie: ph_phc_pRVynbMkwkZJn3GFAI33wbnerKsMZzOHGlHG6Mpl6vj_posthog=%7B%22distinct_id%22%3A%22019b5a97-1666-79d9-a5d7-af6f32cfb028%22%2C%22%24sesid%22%3A%5B1771723085364%2C%22019c82ec-cee7-7ed0-b5c7-bee1acf5774e%22%2C1771723083495%5D%7D; prev_login=%2FygAx9HAmaZ3K62pNbm6PdoHMqk8nVAo7hoPD3INUu97h97lIhIoEQI%2By5x5BGQNHDAclwoDmLwgdYitBYqDsPFio9iCDEe%2Bp4mD6nxSkLZ6%2BRTYVTayvq54A125a94c9qyNSHZQLlbJgxxl--MFGBxXv%2BpLklVCX5--mJQyY6OvZeOIZBZjKWZ2dw%3D%3D; _tryst_session=rIVlYtahYskKzTwgQf1yv0ub68o5BUUlV0y25rEmKq1xYtEWccaZ72U%2BP%2BXYYg2NZ8udt4r71r1CdUvUr6hdFqsr4jht6LegjGeyBWEtUg1xXL%2BTAVIWKLAh4nzMprbHlO%2BAoRB3rD9wPLlGNGh1qN%2Fa1LyVjgPm0NES3uGLE03H1KRKTRV8S6XQd%2FQfALZJarXT3AJegnRRMmq9Rds3fpW9VlBex5erDLXgL7e2EHrHxmYYcjNSUmc3pcXlserLjU3mQNA%2FUwOF6fmHDJXT2KCJ0YKDg%2F15ojbHR1xjcLNeJTiDhVSY8N3FawNfnP9CSNdwN44A5KDCz7rrULtosuL0HiPSM3ITCs0RXuR%2BL2C8hoAJeUTJi%2Bguj76qH6JNAvM3eEJW3Mf0KxN5x76xGNt3twI3KPed2jnEHjqJE0tSyDvLs15I7fPNGLjSkRp6IIXOQgWoWqmhVi3dIAlP3N%2Ftyb40uGn8aMj1pHwNuoOdChIC6QG6apxaFh5Ev87DjfPOgo5KrK4fNY0q%2FbzfeCHV5BKyHSRnh9rcHSo0SHu4zwBX2L7WIdav%2B5qptLJLU5x4fCSq977fRKhk%2FW4fSoV0Aq%2FOqFR2TEeG%2B07OiC8xLYY3F%2FQFwvn%2B3rgEjevFgU0YZGYKXfa5DDAS88tfwWG7WOA%2F%2BmdT%2B59A5BUai3IqDvPFih603m57zwNE42PpLr4LBT1%2BPwb%2Fo15cWJS64glEv4r5rh4h5OdpPHpiK8h%2FiOhlN98Mi36O6X6M9xZo9oUfHVhI9pp6D2F1d%2BR%2F93A0NB0qcaaaX5TdGpNEsNdiNVbzcQBrntcB3DZbvTfYd8FmAdZJUWXm8yNslW1rOpRacwltB%2FcXzblx4Mvsr1vHhotcRdlLN%2BMTlyQBJPHMEBquLVZwhBRY3evO7%2FXyP5mM5gNDdNc3RpEJhZjkINM14pYdTXI12qlBqVFEXcoqoO5szv6Kb1KiPxZ8ng54pSx%2BDgOzmUh827wRZa%2FWbj6f3ADFcwkhv0w5yJaCQV%2FYQCzAdkCDrw%2B2QpOtS3Fopug1TICmVRFNO9h2u4203VJYfvMnxAISJQ%3D%3D--Yon24adbhpYLKbC3--z4tQDS2fNpl%2BjDPVgmTmIA%3D%3D; ph_u=%7B%22distinct_id%22%3A%22a602096c-7e57-4c60-b5d8-3996aca8b296%22%2C%22%24sesid%22%3A%5B1777575054696%2C%22019ddfb9-7271-7d94-af9a-15be956bebd2%22%2C1777574965873%5D%2C%22%24epp%22%3Atrue%7D
Sec-Ch-Ua-Platform: "Android"
X-Csrf-Token: I66UiH6HaExrPnMRdg0XP5ISU-SSYDApR5xxeYm0Zh73QRHHH4ZTWoAPQjX_S7fmJLNvC653sJWq1YhIKk3lUQ
Accept-Language: en-US,en;q=0.9
Sec-Ch-Ua: "Not/A)Brand";v="8", "Chromium";v="137", "Google Chrome";v="137"
Sec-Ch-Ua-Mobile: ?1
Baggage: sentry-environment=production,sentry-release=2026-04-30_14962_9c47c1e1d4,sentry-public_key=eb038ad4e6fc400885d7c8b03ab7245c,sentry-trace_id=ff1320466af54b7dab0b2361167d7987,sentry-sample_rate=0.1,sentry-sampled=false
Sentry-Trace: ff1320466af54b7dab0b2361167d7987-aae0299fbb46ad49-0
User-Agent: Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36
Accept: */*
Origin: https://app.tryst.link
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://app.tryst.link/members/providers
Accept-Encoding: gzip, deflate, br
Priority: u=1, i
Content-Length: 0
`;

// ==========================================
// 🛠️ AUTOMATIC PARSER (DO NOT TOUCH)
// ==========================================
function parseCapture(raw) {
    const headers = {};
    const lines = raw.trim().split(/\r?\n/);
    
    lines.forEach(line => {
        // Skip the request line (e.g., "PATCH /... HTTP/2")
        if (line.startsWith("PATCH") || line.startsWith("POST") || line.startsWith("GET")) return;
        
        const index = line.indexOf(':');
        if (index > -1) {
            const key = line.substring(0, index).trim();
            const value = line.substring(index + 1).trim();
            headers[key] = value;
        }
    });
    return headers;
}

const PARSED_HEADERS = parseCapture(RAW_CAPTURE);

// ==========================================
// 🧠 MAIN LOGIC
// ==========================================

function apiRequest(path, method = "PATCH") {
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: 'app.tryst.link',
            path: path,
            method: method,
            headers: PARSED_HEADERS
        }, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const json = body ? JSON.parse(body) : {};
                    resolve({ status: res.statusCode, data: json });
                } catch {
                    resolve({ status: res.statusCode, data: {} });
                }
            });
        });

        req.on('error', reject);
        req.end();
    });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function runSniper() {
    console.clear();
    console.log("🎯 Tryst Nitro Sniper - Auto Config Mode");
    console.log("---------------------------------------");
    
    // Check if headers were parsed correctly
    if (!PARSED_HEADERS['Cookie'] || !PARSED_HEADERS['X-Csrf-Token']) {
        console.error("🛑 ERROR: Could not find Cookie or X-Csrf-Token in the pasted capture.");
        console.error("   Please make sure you pasted the *entire* text block.");
        process.exit(1);
    }
    console.log("✅ Headers Loaded Successfully.");

    // 1. INITIAL PROBE
    console.log("📡 Probing server for timing...");
    let probe;
    try {
        probe = await apiRequest('/members/providers/profile/available.json', 'PATCH');
    } catch (e) {
        console.log("❌ Network Error. Retrying in 10s...");
        setTimeout(runSniper, 10000);
        return;
    }

    if (probe.status === 401 || probe.status === 403) {
        console.error("🛑 FATAL: Login Expired.");
        console.error("   Please paste a NEW capture into the script.");
        process.exit(1);
    }

    const data = probe.data;
    const now = new Date();
    
    let targetTime = now;
    if (data.available_now_usable_at) {
        targetTime = new Date(data.available_now_usable_at);
    }

    let msUntilFire = targetTime.getTime() - now.getTime();

    // 2. INTELLIGENT WAITING
    if (msUntilFire > 0) {
        console.log(`⏳ Nitro Cooling Down.`);
        console.log(`   Current Time: ${now.toLocaleTimeString()}`);
        console.log(`   Next Activation: ${targetTime.toLocaleTimeString()}`);
        console.log(`   Status: Sleeping for ${(msUntilFire/60000).toFixed(1)} minutes...`);
        
        setTimeout(() => executeCycle(data.available_now), msUntilFire + 500);
    } else {
        console.log("⚡ Ready to fire immediately.");
        await executeCycle(data.available_now);
    }
}

async function executeCycle(isCurrentlyOn) {
    console.log("\n⏰ Waking up! Executing Refresh Cycle...");

    try {
        if (isCurrentlyOn) {
            process.stdout.write("   -> Turning OFF... ");
            await apiRequest('/members/providers/profile/available_off.json', 'PATCH');
            console.log("Done.");
            await sleep(800); 
        }

        process.stdout.write("   -> Turning ON...  ");
        const res = await apiRequest('/members/providers/profile/available.json', 'PATCH');
        
        if (res.status === 200) {
            console.log("✅ SUCCESS! Profile Boosted.");
            if (res.data.available_until) {
                console.log(`   New Valid Until: ${res.data.available_until}`);
            }
        } else {
            console.log(`❌ Failed. Status: ${res.status}`);
        }

    } catch (e) {
        console.error(`⚠️ Execution Error: ${e.message}`);
    }

    console.log("🔄 Recalculating next cycle...");
    setTimeout(runSniper, 2000);
}

runSniper();
