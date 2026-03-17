const https = require('https');

// ==============================================================================
// 📋 PASTE YOUR NEW CAPTURE BELOW (BETWEEN THE BACKTICKS)
// ==============================================================================
const RAW_CAPTURE = `
PATCH /members/providers/profile/available.json HTTP/2
Host: app.tryst.link
Cookie: ph_phc_pRVynbMkwkZJn3GFAI33wbnerKsMZzOHGlHG6Mpl6vj_posthog=%7B%22distinct_id%22%3A%22019cf9be-e74e-7e9c-87ae-745f7c9a959e%22%2C%22%24sesid%22%3A%5B1773716572786%2C%22019cf9be-f5d0-75ee-9af6-d1922b81b5d5%22%2C1773716567504%5D%7D; _tryst_session=7GpwDqJIMAQS9zQSJQOgFK6wMpz65Sd%2BcLunQbzpDHqmj7EVvkaA%2BpzoATdL5CwIwi3t%2Fs5J3Mobgu1wpxan1KBKD9D5%2BScGDVdQqxvBfT%2BQF3mbgF%2FSRX3JDJsiJCTMXwVuvBKuKjvgTI1Hlruemch90F393GKg0l2u4JWVIM8A5YeJ69XTHrqjb148B%2BWP9aDTMlfuukkZ6JOvoyzZEqHpCI0bXvuv5BpmhRM%2FU7XH3hLh8ez06hUfP5%2BDNHNTR3nGDWD0vNcLMB0kLmjUn82sCD2MZKChNQc8Cpx9%2BMArker6R9adqzO%2B7W2js%2BQmxJYe0BExHQQHC2AOtlDwXSCOBCRixIzbiKsMB6Jajhg47oButjCNMQUbzFyZ%2F%2Fid2YMMWmaQyjSnCcL1JRB8lZ53P0Gu6%2FK6qw7ceTAdfW3Tlfsf%2BwnyVPHVIv2kJ8Q5cJ4TO1UhoRtlWnoGoIZOHl%2B60mBS4FCDMi5VhOIfKpOQrg8f9ofrcczNPe9Gk0nltCxegWnbtrieEAK3GbK12Su%2BM1wOOUiI7KbrR1QdERqvBRw8Haz8ugfGStj5xulBEVLbTdSJoa1zw0v1CwNCEC1BO9ffwUC8egQIOmgi4XT7GeiTwpkdKq%2FtgfkwX56mfAhMUzDGRanLN7kTrP4GFZCbNFZnJk1qrnlRKOsXhvaB%2B0nKnHe0H02MLNZ4sOgUEdpT12p%2BChXqf9lCgfGSbDwGagj34kZd9aB1q%2BMKBAVhVy5FqPPKs6ugQSOHNOK6c9Dn9WOunYjIaArmMF8901su5j8nV%2FPp4o%2BIBlTKZI0vH3ZjBPy0LKEgjC7JF9s7lAbtmeSQZS8UWY%2BpfD%2BUqfWWqfFY3Kk1K9GIH2pszCGtR22zHqKvv762lgz6T6hlrmBsB5b3h6Ii7vXOtNvbC4x3MpPU%2Fd1hBLSdfakbIshF3gG1RvjR1ZQ86xTQCRyohGrVLI5hS1Co8TV8M6V06kE8nqv%2FoYdYpsRartPg8fCVN1C05%2BLT40usg7UsqGVfwBMt6E77WBM%3D--xi5EB%2B9bYywAUNvQ--eqe5YPgLsh5IuPlbDD3GZA%3D%3D; prev_login=7IaAGqBWFL30z90OEv0lwkWmXNL57tH3hcIhzllVc5f163ijl5xc8Fv1E5I72PBHunFWXWD1d%2F8B5Lg8DcM8l18JAunzwbFs%2BT5XaR97KRwhtXD3kBqfmrsQaoXU0Lt1LAxEJE6SSlkJOwFf--TmRuBShOFAVPRmpj--d1xLfb0NcxE0CVJ68pSCEg%3D%3D; ph_u=%7B%22distinct_id%22%3A%22ad787f9f-d597-47f4-8053-496c695a3d77%22%2C%22%24sesid%22%3A%5B1773716645884%2C%22019cf9bf-1596-7b77-a9a0-311b3de68f92%22%2C1773716575638%5D%2C%22%24epp%22%3Atrue%7D
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0
Accept: */*
Accept-Language: en-US,en;q=0.9
Accept-Encoding: gzip, deflate, br
Referer: https://app.tryst.link/members/providers
X-Csrf-Token: 2t-dBIUDZww9fZaXJnzduVJ2NFNihYBHdFxaUwkBtO6vNWqBMsFwKUb-V2PHLcjZNsfeL5JoRp4ubzqFcBNuXA
Sentry-Trace: 4a95197b198f4a78b163b53e7fb6d8ee-b608db7c98a43039-0
Baggage: sentry-environment=production,sentry-release=2026-03-16_12343_7be7e20f9c,sentry-public_key=eb038ad4e6fc400885d7c8b03ab7245c,sentry-trace_id=4a95197b198f4a78b163b53e7fb6d8ee,sentry-sample_rate=0.1,sentry-sampled=false
Origin: https://app.tryst.link
Sec-Gpc: 1
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Priority: u=0
Te: trailers
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
