const https = require('https');

// ==============================================================================
// 📋 PASTE YOUR NEW CAPTURE BELOW (BETWEEN THE BACKTICKS)
// ==============================================================================
const RAW_CAPTURE = `
PATCH /members/providers/profile/available.json HTTP/2
Host: app.tryst.link
Cookie: ph_phc_pRVynbMkwkZJn3GFAI33wbnerKsMZzOHGlHG6Mpl6vj_posthog=%7B%22distinct_id%22%3A%22019b5a97-1666-79d9-a5d7-af6f32cfb028%22%2C%22%24sesid%22%3A%5B1768086296023%2C%22019baa27-c69b-7654-bf6a-3d33ff985dc4%22%2C1768086292123%5D%7D; prev_login=8jj8MsFtPmXp7ZyEEG0jqyOAPinvuyNDh7WJ6a4FbKv63ke9A0dZlxsxC435guuBdcR%2Bv7UAysw7cjGX3B%2FsMqkNeJYQVuRMZzTgNAe2zMCRQT5cDSQC80XAFJbkcpUjSqdd5tvO%2FFWI6t0g--toFzoRltNnyuFlkC--pOmXHEd7TraK4BS%2F4kGJXg%3D%3D; _tryst_session=n2i%2B05FxgPvwB8VEns3%2FVT3F1Cv0dvN47hBWm4%2FYb07OMdzwv8Rgwf94EbAoYpgd7nbQk34h7R%2F1pAOA229eXND6B87MBoKZqA56pMXwKjIA%2BPepenSYcM5y7iP%2FGyKA%2BOqoBCXwaSfEzGgZkaLMBylIBbGqZMK4SJ87L3DvqvG3CINDB1b%2FljrIn6errKzmnMAF%2FJhvoQ9hcQzGo25aYjQ2OxBb7naZoaBUhj4fzEqLB1q7K%2FdoJabVE0r8HDjLtrvF%2B1%2B%2Bvz05CP07OnBjoqftz0wjW5Mzm%2FG0wNsa0dveQM73FSIe6mL1BWkBPME%2F7cDnV1S6Nl30WgGD4KFINdd0jDzX%2BPFJn0mcjuovm05%2F8EqE1vinboSDAxXY2E2sU9JiF5SByn2I%2BBwc4AyJqQWv3GT3tA6zre3eHNbECiGw7JmQwtj1fQZyr8K35PM%2BZ%2BM907XLmti%2Bq2qMePVQ3fGx5g49%2FdMT3YWt0dVBD4ENxEtkLZjxTZ4Dj3LLSOXOuzhJOt%2Fe9ZF3KSDV3JSXqgs9XurWhglqLGiF1JebDA4mQdZhGlensx%2BLr0dUDcNx8tsXaQLKzMbB91RQsH64N5FPp%2F46XOfLyLwSeoJhdunfoMh3SyeBQINxktAIzs0Ztnk9xmHlusyxAfSBfpHDgQD4t05k2oJ3tjgQeGJ6DP%2Fzg%2BF0vTCJd2HxYkKkTk5VnsuGeKkKgqzX%2FBQP%2FngYwwbIiEMc9p%2FKfMTnlp42jyBhiQNEmAQMDt%2F2bvatsb3MnSkNTkSRvjkPqpGENDv5Dt3Ok%2FncumGFqEfI%2BWA43cDIiTvg0MlPjX9mfm5UyayBlJxSR60ARueNXAUxyqqUPLrnb1nG58eH6mDIteNZEFGUUidr2xUuu%2BhbYFVFqOUOoDvhDLJp%2BDXze0Pi8vmE0PEuLoXzCY6Jzfem5A4QdWA4MFSWnmua8skZrzQzh8Q0qZY2p4vm5KfQoN8wWDRHHhDkKjuWq%2FN4wQ2oxtMuZ7VX0pZHeLb2AC2l4%2FC9faORBGECjQDjVZPvISRB6ubdx5jyYG6bM1Z2%2FBoXMfUSUcAnTyqMlinp0kBz0At%2BPbPppwRT%2B1UJPPXqbnYmhjEMU1n68Inn6nCnXvDS5A%3D%3D--F5vESBnh%2B8nTzUNx--DA2Nu4ZRN7YCt0tuJKhVdQ%3D%3D; ph_u=%7B%22distinct_id%22%3A%22ad787f9f-d597-47f4-8053-496c695a3d77%22%2C%22%24sesid%22%3A%5B1768413734478%2C%22019bbdab-aad0-7a64-820d-159065449f16%22%2C1768413702864%5D%2C%22%24epp%22%3Atrue%7D
Sec-Ch-Ua-Platform: "Windows"
X-Csrf-Token: Z_PH_I6eb5UeiYQcPVW3UHL2zR0TdXHw_ZORoWrS61TQvx1TL_XFLmI66P-wbJA837jQNr02DwPEcY2lZy5Reg
Accept-Language: en-US,en;q=0.9
Sec-Ch-Ua: "Chromium";v="143", "Not A(Brand";v="24"
Sec-Ch-Ua-Mobile: ?0
Baggage: sentry-environment=production,sentry-release=2026-01-14_8643_b75aa0f99e,sentry-public_key=eb038ad4e6fc400885d7c8b03ab7245c,sentry-trace_id=32813f5f59b847c294701325c7a80eb4,sentry-sample_rate=0.1,sentry-sampled=false
Sentry-Trace: 32813f5f59b847c294701325c7a80eb4-9545573f69d1345b-0
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
