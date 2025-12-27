const https = require('https');

// ==========================================
// 🔧 USER CONFIGURATION (UPDATE THESE!)
// ==========================================
const CONFIG = {
    // Paste your Cookie string here
    COOKIE: `ph_phc_pRVynbMkwkZJn3GFAI33wbnerKsMZzOHGlHG6Mpl6vj_posthog=%7B%22distinct_id%22%3A%22019b5a97-1666-79d9-a5d7-af6f32cfb028%22%2C%22%24sesid%22%3A%5B1766751413280%2C%22019b5a97-1665-7109-a5bb-d4acdbf59029%22%2C1766751409765%5D%7D; prev_login=JHdGZuwEqvmVUpO0uA%2FSFzg2TASHHIiz7VtSxOQjE%2B9U0Ge5I8tLMDRWZ3%2FAnSVCFRH21YJLeYj24fI%2FSgJO6kIlIRqpjIb3paqMrwPIfwK0IMo2h%2FwSxG8OVueu6NASfsSfhv4KB2rs6Jav--bgpMsp1USuIHo6Bv--G3DboSqDnouMz0Rg07ACYA%3D%3D; _tryst_session=obbpgPAMrmFf0uVMQMprUpFDY0KosMTmhQ5b%2F%2BfZzpCkAn7zjt7FvEpvvmzTNmW%2FGRWE758YDF%2F8T7MqEbYQtIaiqmt%2FYZXwo1LMw11bg5zGXfymsCfCz%2BHjtwYrA%2BGV9lGYbjXuBhDeUJkDEHLhrReOiWhLSJx%2FSf8oOCG1iQ9fCTLky2PPWNvSi7sUz0LIarlx40KR3zyhhrDer8kIruWEjJZ1B7%2BW1OKf6nXxJ2nt0q5OH9BMKYAHz8g3MbNG%2FhuS2X7wZxFLn9twpr3e59g%2F5XF9iJ0EdKgOCqXckJxSUXeA%2BvdwfGhDedlDgHxzWLu2xyCvO6lnnSfte6PX6xVqTXiHIwnjHG2F0VpsO7jYiRddvSk3TnLfdw1YbNV8yg4ew7NxJhIX6yFfiheWKsXTphMNQQ%2FMPogXO3HcvdbdKsK%2BACvQI8DB4RbLmzb47ZPNJuustD2bB62ZKRgIaX%2Ftv7RSK1NsQkUo203DKTeJfj0xBOviEukSWn%2BIyf2DaIrKJoObhVR8BX9we3yPeOXkVqdpSJihdVZl8KJ5YjGnGau7PbU2Dq%2BVwUBLA1Ghq8TAXXzgLaGDLgTkgWy1hvfP0rPtKW8wvi7v2JFqZTxda3psCd5%2BuzD22O%2BnlpgU5fmWLSOw8ynqUCZqfGYi0ELEeGuqFhwMzCAoNY0CyKSueVW3WbX6eSuw9zftysmLtW54gEYn7cfAQidp%2B41NutkiRXBJDvH0X4q2%2BFrX7zqXgE6yFNDltDhBdvbiGAoolYjHC1inD2joMUmXc%2BqaO3yHIK4mlJFVA5ocJdK5M9yK8J1aGLCgNyxBZl6%2F42DBbI9hpxUtg3eqWLy%2Bz6tRCMT2zJHBCSUMhFDLKpqYtPZmsahxTmJno5VWQXk%2F1l3%2By7p2tCNchjatj5JtV%2BoTUrcRQlV5V6G%2FyXxW%2FLwFcWhDLrLRr%2BGINDXDdq7rPehe%2BpvodJC9VJ0Wi2%2BPkb2W5lppG335QPnELXonnFhaAFi2cPX66Y0gzHGj3gaPZxABW5QioGFGzBWfy8grozpq44uPtHcj2gGDLnr9Oh2dhUDhSuiEbAMdniBDsPX2OeuAtTRl5IEh%2FpVFx5LHo2txerjWtz7jP9mS8EcoitqsSDt0PGWeGYuMHujOBJGfRzHl8Pt02aSfIHc2LPEMzEf7fFofMUIXOBQZfuXogBBj6g3Hkxf9iAaIf%2F1d1MfOX5hoE517yyi0Ut%2Fzs8GAv0hXvaMcgZNudeQbhVnz9zhmjyv9n%2BG2or65XchxvhgNXx7WDntKGaU0eCyJHvDNtFuPfGRBU2fUfCpf--opoh5VWXvq%2FIUYGs--vFOv%2Foa6UVZaAeJnn7qknw%3D%3D; ph_u=%7B%22distinct_id%22%3A%22ad787f9f-d597-47f4-8053-496c695a3d77%22%2C%22%24sesid%22%3A%5B1766762918626%2C%22019b5b41-7d82-7fea-91ab-a1a29b77b190%22%2C1766762577282%5D%2C%22%24epp%22%3Atrue%7D`,
    
    // Paste your CSRF Token here
    CSRF_TOKEN: "wueoesToSgvCuRcPBeyt200r685Jxl9CxtWaYYF-3JXmf2VfPGqsGlhsb797d7yEICUa6lqUZCrp8qz9W-td8g"
};

// ==========================================
// 🧠 ROBUST LOGIC
// ==========================================

const HEADERS = {
    "Host": "app.tryst.link",
    "Cookie": CONFIG.COOKIE,
    "X-Csrf-Token": CONFIG.CSRF_TOKEN,
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
    "Accept": "application/json",
    "Origin": "https://app.tryst.link",
    "Referer": "https://app.tryst.link/members/providers",
    "Content-Type": "application/json",
};

// Reusable request function
function apiRequest(path, method = "PATCH") {
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: 'app.tryst.link',
            path: path,
            method: method,
            headers: HEADERS
        }, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(body);
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
    console.log("🎯 Tryst Nitro Sniper Started.");
    console.log("---------------------------------");

    // 1. INITIAL PROBE: Get the server truth
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
        console.error("🛑 FATAL: Cookies Expired. Update Config.");
        process.exit(1);
    }

    const data = probe.data;
    const now = new Date();
    
    // Determine the exact moment we can fire
    let targetTime = now;
    if (data.available_now_usable_at) {
        targetTime = new Date(data.available_now_usable_at);
    }

    let msUntilFire = targetTime.getTime() - now.getTime();

    // 2. INTELLIGENT WAITING
    // If we have to wait, we schedule the next hit EXACTLY at that time.
    // We do not busy-wait. We assume the 'available_now_usable_at' is the law.

    if (msUntilFire > 0) {
        console.log(`⏳ Nitro Cooling Down.`);
        console.log(`   Current Time: ${now.toLocaleTimeString()}`);
        console.log(`   Next Activation: ${targetTime.toLocaleTimeString()}`);
        console.log(`   Status: Sleeping for ${(msUntilFire/60000).toFixed(1)} minutes...`);
        
        // We set a wake-up timer. 
        // ROBUSTNESS: We add 500ms buffer to ensure we don't wake up 1ms too early and get rejected.
        setTimeout(() => executeCycle(data.available_now), msUntilFire + 500);
    } else {
        // We are already late or exactly on time. Fire immediately.
        console.log("⚡ Ready to fire immediately.");
        await executeCycle(data.available_now);
    }
}

async function executeCycle(isCurrentlyOn) {
    console.log("\n⏰ Waking up! Executing Refresh Cycle...");

    try {
        // STEP A: If profile is ON, we must turn it OFF first (Nitro refresh)
        if (isCurrentlyOn) {
            process.stdout.write("   -> Turning OFF... ");
            await apiRequest('/members/providers/profile/available_off.json', 'PATCH');
            console.log("Done.");
            
            // Tiny pause to ensure database consistency (Prevents race conditions)
            await sleep(800); 
        }

        // STEP B: Turn ON (The Boost)
        process.stdout.write("   -> Turning ON...  ");
        const res = await apiRequest('/members/providers/profile/available.json', 'PATCH');
        
        if (res.status === 200) {
            console.log("✅ SUCCESS! Profile Boosted.");
            console.log(`   New Valid Until: ${res.data.available_until}`);
        } else {
            console.log(`❌ Failed. Status: ${res.status}`);
        }

    } catch (e) {
        console.error(`⚠️ Execution Error: ${e.message}`);
    }

    // Loop back to start to calculate the next cycle
    console.log("🔄 Recalculating next cycle...");
    setTimeout(runSniper, 2000);
}

// Start the machine
runSniper();
