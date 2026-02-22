const https = require('https');

// ==============================================================================
// 📋 PASTE YOUR NEW CAPTURE BELOW (BETWEEN THE BACKTICKS)
// ==============================================================================
const RAW_CAPTURE = `
PATCH /members/providers/profile/available.json HTTP/2
Host: app.tryst.link
Cookie: ph_phc_pRVynbMkwkZJn3GFAI33wbnerKsMZzOHGlHG6Mpl6vj_posthog=%7B%22distinct_id%22%3A%22019b5a97-1666-79d9-a5d7-af6f32cfb028%22%2C%22%24sesid%22%3A%5B1771723085364%2C%22019c82ec-cee7-7ed0-b5c7-bee1acf5774e%22%2C1771723083495%5D%7D; prev_login=%2FhYjHVxS4QB80wZSWWqypdikdaijz%2BdHC%2BW%2BO%2Fj2sZEJHniCXbm2DViQuE5ktbNTno9byr3ATAHDnfNyPX70kTd1O9UqSN6e7z%2BZhifZsXwpiIXY8eTdv6mxpn5nW4MHrb1mPRm7T9C0FCGE--GXGAD4fL%2BlfKbn4w--IvSZ9haHycQFrJGPC9kcRg%3D%3D; _tryst_session=tNe4N2xJPrtPRd3WyoZPp8OpD1O76sYERIgNCoRFN%2FAnFJFsOmUIkUdfnyNYN2qim4HTxLT9VD1qmca%2B6AbHvmQPkeoIFCw2bXGa3fXiRi9P5HDxRnrKYFm6cno1X7mg4LP3NDGukPLqiBUWPrsnEITKLiXdSDbsmZ6AH2%2BQ3mRqNDYNZYXh6w1%2F53gZSWVDm%2FHWnuvnJxLQR6Nb1ByCY2cIBica5yuH9hv7eZXDodh7hoKmuYdObkNnbF10F1xx4WXbzW%2FDsJImMTNACkPvZvjttG90AZfyEKzUbExSpPeT4ypubEgTWTw2Wni5vSK5HOUCUorjIexGeOjBcZs8DC1Eq0QxXHlujPUpHAfdNAYY2EY4OJwpOAeZzuxE%2BmgmsKVNbspsYEqYA8dqY3g4VwIFZ9EisnT9HyJbM5Lw8ze6DirXYpBfzA10I24s6muFpH%2FcFV97BtJEI72Uj2HfTktXfKM0DNSJVnTClgojIsInvAT4XMf3Rob7xDYgZ0XToxrDdykTU1OV717eX38IhYqsKTlNLNclx78aqJ%2FGWYAEFyJVKPwPmQ%2FRciVNQsm6RGv4A2Cag3S0aLHfZSWW1pssOn7zp2eU58zhtByObkAlm2KLzbcQXFB8fUCqz87rcHdpMEkuB0M49WtPQ1jWuIHRoybTo4E8etiHPfJudfc7HG%2FTUeYRaZ747flXgQ9U2LVbSIk0%2BenjZ9AuERYg8S8eBAreNdTMHOWY5Emd8HEkkhbeeQ4TwdxSahTsvjeoM5eaKPR%2BOopdC5O8XkHyfOxKhBaTZAaQmu1r3R7q4sIbPJQfJRv5RR1bKe6J3Uf3imDyQpQhKuMeBW6wRV2AJ3YbmHaMk5gD%2FmkTpnR4nYQvdxxYHee6487d1of6rFt8Zi8tZXpvZ4qT3asyoFVtKJvYPd60%2BZjfwyP5bOHOP1FBoz%2FxPWrlHxbRvveiRHfn2a8c7tsoNCrOr3cIY%2FjJI7eVk2h5eeYd7HTXwNzTOWrFJA7wpIBBXqPmeaxwx59RdZB14lZYZVHfbq3cIe4j0BxFkoufK%2BI2rUGR4RzQE%2BgD0S%2BtUucbNA%3D%3D--8M6sK8iSKsGfZWXR--6g8WU7DKhIAiQc9AZIE%2Flw%3D%3D; ph_u=%7B%22distinct_id%22%3A%22ad787f9f-d597-47f4-8053-496c695a3d77%22%2C%22%24sesid%22%3A%5B1771723133421%2C%22019c82ec-e80f-7a0d-8eb1-94766df5c212%22%2C1771723089935%5D%2C%22%24epp%22%3Atrue%7D
Sec-Ch-Ua-Platform: "Android"
X-Csrf-Token: kR9-Yrq0CUbtcxFjKrsXEKXbsuvNCGPm89lqER2uVx2PV--DISZeQkNTUz2bfnXOOl01ZWn8cA33ezg7X1qC_g
Accept-Language: en-US,en;q=0.9
Sec-Ch-Ua: "Not/A)Brand";v="8", "Chromium";v="137", "Google Chrome";v="137"
Sec-Ch-Ua-Mobile: ?1
Baggage: sentry-environment=production,sentry-release=2026-02-19_10901_0803011b4d,sentry-public_key=eb038ad4e6fc400885d7c8b03ab7245c,sentry-trace_id=47df6a9fd8a9435a9b1e3582bb8edfdb,sentry-sample_rate=0.1,sentry-sampled=false
Sentry-Trace: 47df6a9fd8a9435a9b1e3582bb8edfdb-95f0147538a319fa-0
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
