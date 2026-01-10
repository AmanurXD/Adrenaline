const https = require('https');

// ==============================================================================
// 📋 PASTE YOUR NEW CAPTURE BELOW (BETWEEN THE BACKTICKS)
// ==============================================================================
const RAW_CAPTURE = `
PATCH /members/providers/profile/available.json HTTP/2
Host: app.tryst.link
Cookie: ph_phc_pRVynbMkwkZJn3GFAI33wbnerKsMZzOHGlHG6Mpl6vj_posthog=%7B%22distinct_id%22%3A%22019b5a97-1666-79d9-a5d7-af6f32cfb028%22%2C%22%24sesid%22%3A%5B1768061386634%2C%22019ba8ab-a61f-7dce-bfee-733be3dc85c2%22%2C1768061380127%5D%7D; prev_login=xrQWBphLo9oln9%2BIcH4J7ZhxKZodoGOIRmW1jHKYBK8sBs2YtGEFnXR8AojAxJx42As5gRteE4aPfPuZTx0Mi6A01TiprUKRYsaaSOl%2F9CtlyIuVOrSsIm6OPIqX7id4ma4hdh1nQZmGXPlw--DUmSjXSSXb4SrLyj--R1V6%2Fk6%2FVEjsCG0gFDxQag%3D%3D; _tryst_session=%2FDCDB2KgnLpffYWXnooOKxQwJj37hPIWrbgsAa6cMTwfJ2kGmQqVj7q4pjhtgqNoiUt2KkNXMJuDJ%2B0vi7ug%2B%2B1wQBdWvmc4mTZ6v8hXoojucc0GvIPQLTcEpA7R5XGK%2B1rcVDTJ%2F%2B%2FNUOiLE6Ih0B5jLDMrR9r5GWtWvjjQfSzRE3lNuIQZLfSCvlaOUWbCH82ByfMVJH6VO5LytGkbEQwbdN5xWXc4E%2FuQdckuXjTZHOtkLr%2FlAuVo0%2F%2FOEZk9wrGFTFNy4ctPGmCFb6lz7jEHbKputdMJ35ZnrPC%2BQPP%2BZbz2ItsoiLO4C48fX924RNEGy7MDf%2FvLKsfyuFG6OS%2F1mFklEcxe2Ousu9%2F6D8DBKYEN6TMOgFp8LZYifIaYZbObr03f%2BXmV7x%2Bk9kYHtWgSWYpN5%2BhBMfC8QJYWOoCZdvUkkNp7amR5ySeTzLBam2BvAwcYRSTDCMPjgOdj4Cn1ReJSeLeRLQHhx38s1PjypRyq4weTTxsZQm%2B%2FB3gdR%2FNmKSpp72bzTdRIOGB2u3DaxpLxYophzHs0KCPTMNj7LHpsLGcBA9pYDguAO3gwHSSbutT7Qty9%2BdL3Fxs9hfpYiBZ9Z1dV%2BOrRBWMqJEVjR4rGLVuAQmuMikrnXzpDTCKm9uaxPq9RiyuJvqWIw7FOD2zxZLsy2RP%2Bdxy0GFoEF3FgMd4YU3DcuWH2fOFGNiiSIhyxY9nd1O8%2FdffNAG50TdOjwKF3uCZgWAmj1VSLDfiPO%2Bg5qL4N4ndeLi6MmhKCWB3PY67VzNgNAjOG8xZMz1Ex%2Fkl2Dx7c%2BoPh3uCE3iKrLZpcBAARMQOnwfzjGkPJ8wuiZkYzLvSf0%2BTCr4%2BiGRjdR8hIxV2%2BLeRpGwrj%2Ft1wVuPMnetu2Cfwr7gwl4Y3N6OhdIMTznYTPF%2BSkE5praXL8pBAMnw84guhLWbvI8MtIgSNWjIgAR0NCAFKp5dMxfZFVJOAxU%2FYaB3HcnTYiTCAc8U350HG5vbcGaX%2BxcB039f6DAR4NHGIZ8PqXpIERU8cDWJXWxKiygtvtOWPETD7CTwZ0m0KrJWzrtpk%2FBTJ%2BTQIZ%2BwYCBQX7sAr--WfF9%2BRKqX0iRLdgn--ej65ys065jtXOS5j6KUQmQ%3D%3D; ph_u=%7B%22distinct_id%22%3A%22ad787f9f-d597-47f4-8053-496c695a3d77%22%2C%22%24sesid%22%3A%5B1768061586459%2C%22019ba8ab-bfcb-7773-90c2-4e83cbca5eb4%22%2C1768061386699%5D%2C%22%24epp%22%3Atrue%7D
Sec-Ch-Ua-Platform: "Windows"
X-Csrf-Token: jvok_YXAKgrMUiuyE_COQx2r6Xdkm83zoihCILDS4fYpaMR-W3KPOLHcHVt04tixPFN3xaM2L8ke3YIa9Cvv6w
Accept-Language: en-US,en;q=0.9
Sec-Ch-Ua: "Chromium";v="143", "Not A(Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Baggage: sentry-environment=production,sentry-release=2026-01-10_8383_5a1e565a00,sentry-public_key=eb038ad4e6fc400885d7c8b03ab7245c,sentry-trace_id=c86f24cb295d4e91baa45164af448df4,sentry-sample_rate=0.1,sentry-sampled=false
Sentry-Trace: c86f24cb295d4e91baa45164af448df4-97076af0884c65da-0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
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
